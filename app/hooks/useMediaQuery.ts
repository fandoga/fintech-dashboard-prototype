"use client";

import { useState, useEffect } from "react";

/**
 * Кастомный хук для работы с медиа-запросами
 * @param query - CSS медиа-запрос (например: "(max-width: 768px)")
 * @returns boolean - соответствует ли текущий экран медиа-запросу
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Проверяем, что мы на клиенте (важно для Next.js SSR)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // Устанавливаем начальное значение
    setMatches(mediaQuery.matches);

    // Создаем обработчик изменений
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Подписываемся на изменения
    // Современный способ (addEventListener)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      // Fallback для старых браузеров (addListener)
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [query]);

  return matches;
}

/**
 * Предустановленные брейкпоинты (можно настроить под ваш проект)
 */
export const useBreakpoints = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isQuadHD = useMediaQuery("(min-width: 1600px)");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return {
    isMobile,
    isTablet,
    isDesktop,
    isQuadHD,
    isDarkMode,
  };
};
