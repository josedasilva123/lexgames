import React, { useEffect, useRef } from "react";

export const useIntersectionObserver = <Element extends globalThis.Element>(callback: (entries: IntersectionObserverEntry[], observingElement: Element) => void) => {
    const observingElement = useRef<Element>(null);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            callback(entries, observingElement.current as Element);
        })

        intersectionObserver.observe(observingElement.current as Element);

        return () => {
            intersectionObserver.disconnect();
        };
    }, [])

    return observingElement
    
}