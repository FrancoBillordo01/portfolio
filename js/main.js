const elementos = document.querySelectorAll(
  ".tarjeta-proyecto, .tarjeta-servicio, #sobre-mi, #contacto"
);

const reducirMovimiento = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

if (
  !reducirMovimiento.matches &&
  "IntersectionObserver" in window
) {
  const observador = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  elementos.forEach((elemento) => {
    elemento.classList.add("revelar");
    observador.observe(elemento);
  });
}

