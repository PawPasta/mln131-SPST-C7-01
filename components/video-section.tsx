'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import quizData from '@/data/video-quiz.json';

interface VideoSectionProps {
  title: string;
}

interface VideoQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex?: number;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number>;
          events?: {
            onReady?: (event: { target: { getCurrentTime: () => number } }) => void;
          };
        }
      ) => {
        playVideo: () => void;
        pauseVideo: () => void;
        destroy: () => void;
        getCurrentTime: () => number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const parseTimeToSeconds = (value?: string) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  const separator = trimmed.includes(':') ? ':' : trimmed.includes('.') ? '.' : null;
  if (separator) {
    const parts = trimmed.split(separator).map((part) => part.trim());
    if (parts.length === 2) {
      const minutes = Number(parts[0]);
      const seconds = Number(parts[1]);
      if (Number.isFinite(minutes) && Number.isFinite(seconds)) {
        return minutes * 60 + seconds;
      }
    }
    if (parts.length === 3) {
      const hours = Number(parts[0]);
      const minutes = Number(parts[1]);
      const seconds = Number(parts[2]);
      if (Number.isFinite(hours) && Number.isFinite(minutes) && Number.isFinite(seconds)) {
        return hours * 3600 + minutes * 60 + seconds;
      }
    }
  }
  const numeric = Number(trimmed);
  return Number.isFinite(numeric) ? numeric : null;
};

export function VideoSection({ title }: VideoSectionProps) {
  const videoUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL;
  const urlMatch = videoUrl?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/
  );
  const videoId =
    urlMatch?.[1] || process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || 'dQw4w9WgXcQ';
  const stopAt = useMemo(
    () => parseTimeToSeconds(process.env.NEXT_PUBLIC_YOUTUBE_QUIZ_STOP),
    []
  );
  const quizQuestion = (quizData.questions?.[0] ?? null) as VideoQuizQuestion | null;

  type YouTubePlayer = InstanceType<NonNullable<Window['YT']>['Player']>;

  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const hasTriggeredRef = useRef(false);
  const intervalRef = useRef<number | null>(null);

  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!playerContainerRef.current) return;

    let isMounted = true;
    hasTriggeredRef.current = false;
    setShowQuiz(false);
    setSelectedOption(null);
    setErrorMessage(null);

    const startTracking = () => {
      if (!stopAt || !quizQuestion) return;
      if (intervalRef.current) return;
      intervalRef.current = window.setInterval(() => {
        if (!playerRef.current || hasTriggeredRef.current) return;
        const currentTime = playerRef.current.getCurrentTime();
        if (currentTime >= stopAt) {
          hasTriggeredRef.current = true;
          playerRef.current.pauseVideo();
          setShowQuiz(true);
        }
      }, 500);
    };

    const createPlayer = () => {
      if (!isMounted || !playerContainerRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        videoId,
        playerVars: {
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            startTracking();
          }
        }
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
      }
      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    }

    return () => {
      isMounted = false;
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId, stopAt, quizQuestion]);

  const handleContinue = () => {
    if (selectedOption === null) {
      setErrorMessage('Vui lòng chọn đáp án để tiếp tục.');
      return;
    }
    if (quizQuestion?.correctIndex !== undefined && selectedOption !== quizQuestion.correctIndex) {
      setErrorMessage('Đáp án chưa đúng. Vui lòng thử lại.');
      return;
    }
    setErrorMessage(null);
    setShowQuiz(false);
    playerRef.current?.playVideo();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{title}</h2>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
        <div className="relative aspect-video rounded-t-2xl overflow-hidden bg-black">
          <div ref={playerContainerRef} className="h-full w-full" />
          {showQuiz && quizQuestion ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/90 px-4 py-6 backdrop-blur-sm">
              <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-lg">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                      Câu hỏi nhanh
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {quizQuestion.question}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {quizQuestion.options.map((option, optionIndex) => (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-all ${
                          selectedOption === optionIndex
                            ? 'border-primary bg-primary/10'
                            : 'border-border bg-background'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`quiz-${quizQuestion.id}`}
                          checked={selectedOption === optionIndex}
                          onChange={() => {
                            setSelectedOption(optionIndex);
                            setErrorMessage(null);
                          }}
                          className="mt-1 h-4 w-4"
                        />
                        <span className="text-sm text-foreground/80">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errorMessage ? (
                    <p className="text-sm font-medium text-destructive">{errorMessage}</p>
                  ) : null}
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    Tiếp tục xem video
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 space-y-3">
        <h3 className="font-bold text-lg text-foreground">Kết luận</h3>
        <p className="text-base leading-relaxed text-foreground/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua, nhấn mạnh ý nghĩa của{' '}
          <strong>kết hôn</strong> và vai trò của <em>gia đình</em> trong đời sống hiện đại.
        </p>
      </div>
    </div>
  );
}
