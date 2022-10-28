import React, { useEffect, useRef } from "react";

export const useIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
    const observingElement = useRef<any>(null);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            callback(entries);
        })

        intersectionObserver.observe(observingElement.current);

        return () => {
            intersectionObserver.disconnect();
        };
    })

    return observingElement
    
}