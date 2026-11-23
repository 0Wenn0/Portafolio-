import type { Locale } from "./types";

// Caso "Producción de video con IA generativa": dos piezas y lo que aprendí al
// escribir prompts de video. Regla del sitio: solo se afirma lo verificado.
// - BécALAS: imagen con Google Vids (Veo 3.1) y voz con ElevenLabs (confirmado
//   por Wenn el 22 nov 2026). Es el mismo video publicado en el micrositio de BécALAS.
// - Microcápsula: avatar y voz de Synthesia; composición, gráficos y subtítulos
//   programados con Claude porque el agente de Synthesia se quedó sin créditos.
//   Es un primer borrador; la siguiente iteración ya está definida.

export type VideoAsset = {
  src: string;
  poster: string;
  label: string;
};

export type Lesson = { problem: string; cause: string; fix: string };

export type VideoPiece = {
  id: string;
  kind: string;
  title: string;
  summary: string;
  tools: { label: string; value: string }[];
  video?: VideoAsset;
  pendingNote?: string;
  detailTitle: string;
  detail: string[];
  transcriptLabel?: string;
  transcript?: string[];
};

type VideoAiContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  pieces: VideoPiece[];
  lessonsTitle: string;
  lessonsIntro: string;
  lessonsLabel: string;
  lessonHeads: { problem: string; cause: string; fix: string };
  lessons: Lesson[];
  principlesTitle: string;
  principles: { title: string; text: string }[];
  nextTitle: string;
  next: string;
  ctaTitle: string;
  ctaText: string;
  cta: { label: string; href: string };
};

const transcriptEs = [
  "Saber cómo aprende el cerebro cambia la forma de capacitar. Te comparto un método de tres pasos para convertir lo que sabe un experto en aprendizaje útil.",
  "Primero, captura. Entrevista al experto con tres preguntas: ¿en qué se equivoca la gente?, ¿cómo se ve un trabajo excelente? y ¿qué decisión importa más? Con eso defines un objetivo claro.",
  "Segundo, dosifica. Nuestra memoria de trabajo tiene una capacidad limitada para procesar información nueva. Divide la tarea en pasos cortos, presenta una idea por pantalla y acompáñala con un ejemplo real.",
  "Tercero, practica. Recordamos mejor lo que recuperamos de la memoria. Agrega un escenario donde la persona decida y reciba retroalimentación inmediata, y un repaso días después.",
  "Ahora tú: ¿qué ayuda más a recordar y aplicar una habilidad nueva? Piénsalo un momento. La respuesta es la B: recuperar información, responder preguntas y tomar decisiones ayudan a fortalecer el aprendizaje.",
  "Captura, dosifica y practica. La inteligencia artificial ayuda a construirlo más rápido, como este video. Lo diseñó Wendy Ramírez Burgos, neuropsicóloga y diseñadora instruccional.",
];

const es: VideoAiContent = {
  metaTitle: "Producción de video con IA generativa · Wendy Ramírez Burgos",
  metaDescription:
    "Dos videos hechos con IA generativa (Google Vids, ElevenLabs y Synthesia) y lo que aprendí: un prompt de video es un storyboard.",
  eyebrow: "Producción de video con IA generativa",
  title: "Un prompt de video es un storyboard",
  intro:
    "Dos piezas de video hechas con IA generativa. En las dos apliqué lo mismo que en diseño instruccional: separar estilo, personajes, acción, audio y transiciones, y definir criterios antes de producir.",
  stats: [
    { value: "2", label: "videos" },
    { value: "4", label: "herramientas de IA" },
    { value: "1", label: "intento en Synthesia" },
  ],
  pieces: [
    {
      id: "becalas",
      kind: "Pieza 1 · Presentación",
      title: "Video de presentación como mentora de BécALAS",
      summary:
        "Ochenta segundos en ocho clips, con mi personaje ilustrado y mi gata Nami, para presentarme con mi grupo de mentoradas. Cada clip se generó por separado, así que la continuidad se diseñó en el prompt.",
      tools: [
        { label: "Imagen", value: "Google Vids (Veo 3.1)" },
        { label: "Voz", value: "ElevenLabs" },
        { label: "Prompts", value: "Revisados con Claude" },
      ],
      video: {
        src: "/video-ia/presentacion-becalas.mp4",
        poster: "/video-ia/presentacion-becalas-poster.webp",
        label: "Video de presentación como mentora de BécALAS, ochenta segundos con subtítulos",
      },
      detailTitle: "Qué pasó",
      detail: [
        "El primer guion tenía siete clips. Al generarlos, la ropa cambiaba entre escenas, la gata se duplicaba y aparecían letras inventadas en los libros.",
        "Audité el prompt, encontré doce errores y lo reescribí con bloques fijos (estilo, personajes, vestuario) y con el último cuadro de cada clip igual al primero del siguiente.",
        "Con cinco generaciones disponibles, regeneré solo los clips que fallaban. Google Vids rechazó uno por sus términos de uso; con lenguaje neutro pasó.",
      ],
    },
    {
      id: "microcapsula",
      kind: "Pieza 2 · Microaprendizaje",
      title: "Microcápsula «De la mente a la práctica»",
      summary:
        "Cápsula de minuto y medio que enseña a convertir el conocimiento de un experto en aprendizaje: capturar, dosificar y practicar, con una pregunta de recuperación al final.",
      tools: [
        { label: "Avatar y voz", value: "Synthesia" },
        { label: "Composición y animación", value: "Programadas con Claude" },
        { label: "Estado", value: "Primer borrador" },
      ],
      video: {
        src: "/video-ia/microcapsula-de-la-mente-a-la-practica.mp4",
        poster: "/video-ia/microcapsula-poster.webp",
        label: "Microcápsula De la mente a la práctica, video de un minuto y medio con subtítulos",
      },
      detailTitle: "Decisiones de diseño",
      detail: [
        "Fundamento en ciencias cognitivas: segmentación para cuidar la carga cognitiva, recuperación activa con una pregunta de opción múltiple y práctica espaciada.",
        "Composición: presentadora a la izquierda, contenido a la derecha, subtítulos abajo y una sola idea visual por escena. Paleta y tipografía de este portafolio.",
        "Synthesia permitía un solo intento. Su agente se quedó sin créditos a la mitad: generó dos de siete clips con movimiento y ningún gráfico. Conservé su avatar y su voz, y programé con Claude la composición, los gráficos animados, los subtítulos y la tarjeta final.",
      ],
      transcriptLabel: "Transcripción",
      transcript: transcriptEs,
    },
  ],
  lessonsTitle: "Lo que salió mal y cómo lo resolví",
  lessonsIntro: "Los errores del video de BécALAS se convirtieron en reglas para el siguiente prompt.",
  lessonsLabel: "Ver los diez problemas",
  lessonHeads: { problem: "Problema", cause: "Causa", fix: "Lo que funcionó" },
  lessons: [
    { problem: "Cortes entre clips", cause: "El modelo no ve los otros clips.", fix: "Describir el último cuadro de un clip y el primero del siguiente con las mismas palabras." },
    { problem: "Cambio de ropa", cause: "Vestuario ambiguo y referencias con otra ropa.", fix: "Vestuario exacto, «esta ropa todo el clip» y una sola referencia que ya salió bien." },
    { problem: "Personajes duplicados", cause: "Referencia con varias poses y espacios vacíos.", fix: "Conteo explícito («exactamente un gato») y lugar fijo para cada personaje." },
    { problem: "Letras inventadas", cause: "Libros y pantallas invitan a escribir.", fix: "Fondos solo con líneas y formas abstractas, sin letras ni números." },
    { problem: "Pausas raras", cause: "Pedí una pausa y un cuadro congelado.", fix: "Quitar las pausas y hablar de «cuadro final», no de «congelar»." },
    { problem: "Boca y voz desfasadas", cause: "Demasiadas palabras para diez segundos.", fix: "Máximo unas veinte palabras en siete segundos de habla, con el rostro visible." },
    { problem: "Pronunciación", cause: "Siglas, cifras y palabras en inglés.", fix: "Escribir como se dice: «Bécalas», «dos mil veintiséis», «senderismo»." },
    { problem: "Rechazo por términos", cause: "Lenguaje técnico de sincronía labial con una foto real.", fix: "Personaje ilustrado como referencia y «habla con calidez a la cámara»." },
    { problem: "Paleta inconsistente", cause: "Colores distintos en cada clip.", fix: "Un bloque de estilo idéntico en todos los prompts." },
    { problem: "Créditos gastados", cause: "Generar sin revisar el prompt.", fix: "Auditar antes de generar y validar el primer clip antes de seguir." },
  ],
  principlesTitle: "Cuatro principios",
  principles: [
    { title: "Cada clip es un prompt independiente", text: "La continuidad no viene de la historia, sino de repetir los mismos bloques de texto." },
    { title: "Lo ambiguo se rellena", text: "Si no dices cuántos personajes, qué ropa o qué texto, el modelo decide por ti." },
    { title: "La voz tiene un límite", text: "Alrededor de 2.3 palabras por segundo. El guion se cuenta antes de generar." },
    { title: "Auditar antes de generar", text: "Con un intento o cinco créditos, revisar el prompt ahorra más que regenerar." },
  ],
  nextTitle: "Siguiente iteración",
  next:
    "La microcápsula quedó plana: la presentadora aparece aunque no esté haciendo nada. En la próxima versión solo aparecerá cuando hable, y el resto del tiempo el contenido tendrá más movimiento.",
  ctaTitle: "¿Necesitas cápsulas con IA para tu equipo?",
  ctaText: "Diseño el guion, el prompt y los criterios de calidad, y produzco el video con la herramienta que tengas.",
  cta: { label: "Ver servicios", href: "/servicios" },
};

const transcriptEn = [
  "Knowing how the brain learns changes the way we train. Here is a three-step method to turn what an expert knows into useful learning.",
  "First, capture. Interview the expert with three questions: where do people get it wrong? What does excellent work look like? Which decision matters most? That gives you a clear objective.",
  "Second, chunk. Our working memory has a limited capacity to process new information. Break the task into short steps, show one idea per screen and pair it with a real example.",
  "Third, practice. We remember better what we retrieve from memory. Add a scenario where the person decides and gets immediate feedback, and a review a few days later.",
  "Your turn: what helps most to remember and apply a new skill? Think about it for a moment. The answer is B: retrieving information, answering questions and making decisions strengthen learning.",
  "Capture, chunk and practice. Artificial intelligence helps build it faster, like this video. Designed by Wendy Ramírez Burgos, neuropsychologist and instructional designer.",
];

const en: VideoAiContent = {
  metaTitle: "Generative AI video production · Wendy Ramírez Burgos",
  metaDescription:
    "Two videos made with generative AI (Google Vids, ElevenLabs and Synthesia) and what I learned: a video prompt is a storyboard.",
  eyebrow: "Generative AI video production",
  title: "A video prompt is a storyboard",
  intro:
    "Two videos made with generative AI. In both I applied what I do in instructional design: separate style, characters, action, audio and transitions, and set quality criteria before producing.",
  stats: [
    { value: "2", label: "videos" },
    { value: "4", label: "AI tools" },
    { value: "1", label: "attempt in Synthesia" },
  ],
  pieces: [
    {
      id: "becalas",
      kind: "Piece 1 · Introduction",
      title: "Introduction video as a BécALAS mentor",
      summary:
        "Eighty seconds in eight clips, with my illustrated character and my cat Nami, to introduce myself to my mentoring group. Each clip was generated separately, so continuity had to be designed in the prompt.",
      tools: [
        { label: "Image", value: "Google Vids (Veo 3.1)" },
        { label: "Voice", value: "ElevenLabs" },
        { label: "Prompts", value: "Reviewed with Claude" },
      ],
      video: {
        src: "/video-ia/presentacion-becalas.mp4",
        poster: "/video-ia/presentacion-becalas-poster.webp",
        label: "Introduction video as a BécALAS mentor, eighty seconds in Spanish with subtitles",
      },
      detailTitle: "What happened",
      detail: [
        "The first script had seven clips. Outfits changed between scenes, the cat was duplicated and made-up letters appeared on the books.",
        "I audited the prompt, found twelve errors and rewrote it with fixed blocks (style, characters, wardrobe) and with each clip's last frame matching the next clip's first frame.",
        "With five generations left, I regenerated only the failing clips. Google Vids rejected one under its terms of use; neutral wording got it through.",
      ],
    },
    {
      id: "microcapsula",
      kind: "Piece 2 · Microlearning",
      title: "Microlearning capsule “From mind to practice”",
      summary:
        "A minute-and-a-half capsule (in Spanish) that teaches how to turn expert knowledge into learning: capture, chunk and practice, with a retrieval question at the end.",
      tools: [
        { label: "Avatar and voice", value: "Synthesia" },
        { label: "Layout and animation", value: "Coded with Claude" },
        { label: "Status", value: "First draft" },
      ],
      video: {
        src: "/video-ia/microcapsula-de-la-mente-a-la-practica.mp4",
        poster: "/video-ia/microcapsula-poster.webp",
        label: "Microlearning capsule From mind to practice, a minute-and-a-half video in Spanish with subtitles",
      },
      detailTitle: "Design decisions",
      detail: [
        "Grounded in cognitive science: chunking to manage cognitive load, active retrieval with a multiple-choice question, and spaced practice.",
        "Layout: presenter on the left, content on the right, subtitles at the bottom and one visual idea per scene. Colors and type from this portfolio.",
        "Synthesia allowed a single attempt. Its agent ran out of credits halfway: it produced two of seven moving clips and no graphics. I kept its avatar and voice and coded the layout, animated graphics, subtitles and end card with Claude.",
      ],
      transcriptLabel: "Transcript (English translation)",
      transcript: transcriptEn,
    },
  ],
  lessonsTitle: "What went wrong and how I fixed it",
  lessonsIntro: "The errors in the BécALAS video became rules for the next prompt.",
  lessonsLabel: "See the ten problems",
  lessonHeads: { problem: "Problem", cause: "Cause", fix: "What worked" },
  lessons: [
    { problem: "Cuts between clips", cause: "The model does not see the other clips.", fix: "Describe one clip's last frame and the next clip's first frame with the same words." },
    { problem: "Outfit changes", cause: "Vague wardrobe and references with other clothes.", fix: "Exact wardrobe, “this outfit for the whole clip” and one reference that already worked." },
    { problem: "Duplicated characters", cause: "References with several poses and empty spaces.", fix: "Explicit counts (“exactly one cat”) and a fixed place for each character." },
    { problem: "Made-up letters", cause: "Books and screens invite writing.", fix: "Backgrounds with abstract lines and shapes only, no letters or numbers." },
    { problem: "Odd pauses", cause: "I asked for a pause and a frozen frame.", fix: "Remove pauses and say “final frame”, not “freeze”." },
    { problem: "Lips and voice out of sync", cause: "Too many words for ten seconds.", fix: "About twenty words in seven seconds of speech, face visible." },
    { problem: "Pronunciation", cause: "Acronyms, numbers and English words.", fix: "Write it as it is said, in full words." },
    { problem: "Rejected under terms of use", cause: "Technical lip-sync wording with a real photo.", fix: "An illustrated character as reference and “talks warmly to the camera”." },
    { problem: "Inconsistent colors", cause: "Different colors in each clip.", fix: "An identical style block in every prompt." },
    { problem: "Wasted credits", cause: "Generating without reviewing the prompt.", fix: "Audit before generating and validate the first clip before continuing." },
  ],
  principlesTitle: "Four principles",
  principles: [
    { title: "Each clip is an independent prompt", text: "Continuity comes from repeating the same text blocks, not from the story." },
    { title: "Whatever is vague gets filled in", text: "If you don't say how many characters, which clothes or which text, the model decides." },
    { title: "Voice has a limit", text: "About 2.3 words per second. Count the script before generating." },
    { title: "Audit before generating", text: "With one attempt or five credits, reviewing the prompt saves more than regenerating." },
  ],
  nextTitle: "Next iteration",
  next:
    "The capsule came out flat: the presenter stays on screen even when she is doing nothing. In the next version she will appear only when she speaks, and the content will carry more motion the rest of the time.",
  ctaTitle: "Need AI-made learning capsules for your team?",
  ctaText: "I design the script, the prompt and the quality criteria, and produce the video with the tool you already have.",
  cta: { label: "See services", href: "/en/servicios" },
};

export function getVideoAi(locale: Locale): VideoAiContent {
  return locale === "en" ? en : es;
}
