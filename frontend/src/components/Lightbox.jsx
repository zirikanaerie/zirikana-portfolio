import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/lightbox.css";

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const image = images[index];

  useEffect(() => {
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "Tab") {
        // simple focus trap within the dialog
        const focusable = dialogRef.current?.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeBtnRef}
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <X size={26} aria-hidden="true" />
      </button>

      {onPrev && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={30} aria-hidden="true" />
        </button>
      )}

      <img
        src={image.src}
        alt={image.alt}
        className="lightbox__image"
        style={{ objectPosition: image.objectPosition }}
      />

      {onNext && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight size={30} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
