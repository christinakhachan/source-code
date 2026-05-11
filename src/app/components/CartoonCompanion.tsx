const companionImage = "/cartoon-companion.png";

export default function CartoonCompanion() {
  return (
    <aside
      aria-hidden="true"
      style={{
        position: "fixed",
        right: "14px",
        bottom: "0",
        zIndex: 9999,
        width: "clamp(88px, 10vw, 170px)",
        pointerEvents: "none",
      }}
    >
      <img
        src={companionImage}
        alt=""
        draggable={false}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          userSelect: "none",
          filter: "drop-shadow(0 18px 32px rgba(43, 31, 54, 0.22))",
          animation: "companionFloat 5.8s ease-in-out infinite",
        }}
      />
    </aside>
  );
}
