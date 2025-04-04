"use client";

import { useRef, useCallback } from "react";

export default function ScrollableContainer({ children }: { children: React.ReactNode }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const moved = useRef(false);

    // Função que desativa temporariamente os cliques somente se não for mobile
    const disableClickTemporarily = () => {
        if (!scrollRef.current) return;
        // Se estivermos num dispositivo com touch, não desabilita os cliques
        if ("ontouchstart" in window) return;
        scrollRef.current.style.pointerEvents = "none";
        // Reativa os cliques depois de 100ms
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.style.pointerEvents = "auto";
            }
        }, 100);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
        moved.current = true;
    }, []);

    const handleMouseUp = useCallback(() => {
        if (moved.current) {
            disableClickTemporarily();
        }
        isDragging.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }, [handleMouseMove]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        isDragging.current = true;
        moved.current = false;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        isDragging.current = true;
        moved.current = false;
        startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging.current || !scrollRef.current) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        if (Math.abs(walk) > 5) {
            scrollRef.current.scrollLeft = scrollLeft.current - walk;
            moved.current = true;
        }
    };

    const handleTouchEnd = () => {
        if (moved.current) {
            disableClickTemporarily();
        }
        setTimeout(() => {
            isDragging.current = false;
        }, 0);
    };

    return (
        <div
            ref={scrollRef}
            className="overflow-x-auto cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            {children}
        </div>
    );
}
