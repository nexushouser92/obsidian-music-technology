export const posts = [
  {
    slug: 'postmarketos-echo-show8-progreso',
    title: 'postmarketOS en el Echo Show 8',
    category: 'LINUX / EMBEDDED',
    date: '2026-10-28',
    dateFormatted: '28 Oct 2026',
    heroImage: '/blog/echo-show8.webp',
    heroImageAlt: 'Amazon Echo Show 8 ejecutando postmarketOS',
    excerpt: 'Port de postmarketOS al Amazon Echo Show 8 (2nd Gen): hardware compatible, WiFi monitor mode, acceso USB serial y capturas reales del dispositivo.',
    content: `
<p>El Amazon Echo Show 8 de segunda generación (codename <code>athena</code>, SoC MediaTek MT8183) ya arranca <strong>postmarketOS edge</strong> de forma completa sobre Alpine Linux con kernel 6.18.56-techo5-athena. Este post resume lo que se ha logrado, el estado real del hardware y cómo está configurado el entorno.</p>

<h2>Lo que se ha logrado</h2>
<p>El dispositivo expone un gadget USB compuesto con shell raíz a 115200 baudios (puerto COM9, sin drivers adicionales en Windows) y una interfaz de red RNDIS en <code>172.16.42.1</code> para SSH sin contraseña. El chip WiFi MT7921 corre <code>wlan0</code> en modo administrado y <code>mon0</code> en modo monitor al mismo tiempo, con persistencia entre reinicios vía OpenRC. Los scripts del repositorio automatizan todo el proceso desde Windows con <code>pyserial</code>.</p>

<h2>Compatibilidad de hardware</h2>
<table>
  <thead><tr><th>Componente</th><th>Estado</th></tr></thead>
  <tbody>
    <tr><td>Pantalla LCD + retroiluminación</td><td>✅ Funciona</td></tr>
    <tr><td>Touchscreen (FT5x06)</td><td>✅ Funciona</td></tr>
    <tr><td>WiFi modo administrado</td><td>✅ Funciona</td></tr>
    <tr><td>WiFi modo monitor</td><td>✅ Funciona</td></tr>
    <tr><td>Bluetooth</td><td>✅ Funciona</td></tr>
    <tr><td>Reproducción de audio</td><td>✅ Funciona</td></tr>
    <tr><td>Sensor de luz ambiental (TCS3400)</td><td>✅ Funciona</td></tr>
    <tr><td>USB gadget (serial + red)</td><td>✅ Funciona</td></tr>
    <tr><td>Micrófono</td><td>⚠️ Presente, sin pruebas completas</td></tr>
    <tr><td>Cámara trasera / frontal</td><td>⚠️ Driver ISP cargado, sin probar</td></tr>
    <tr><td>Acelerómetro / Giroscopio</td><td>❌ No detectado</td></tr>
    <tr><td>Reporte de batería</td><td>❓ Sin entradas en sysfs</td></tr>
  </tbody>
</table>

<h2>El entorno gráfico</h2>
<p>postmarketOS incluye <strong>Phosh</strong> como entorno por defecto (Wayland/GTK4). En este dispositivo se conserva Phosh como compositor Wayland pero se reemplazó la pantalla de inicio con <strong>echo-launcher</strong>: un launcher minimalista escrito en Python/GTK4 diseñado específicamente para el Echo Show 8. Incluye iconos arrastrables sobre fondo negro, barra de búsqueda Google integrada y cajón de aplicaciones táctil.</p>

<h2>Capturas del dispositivo</h2>
<img src="/blog/echo-show8-desktop.png" alt="Escritorio postmarketOS corriendo en el Echo Show 8" style="width:100%;max-width:640px;border-radius:4px;margin:1.5rem 0;display:block;" />
<p>El escritorio muestra el launcher personalizado corriendo sobre Phosh. La pantalla está configurada en orientación horizontal (transform 90°) a escala 1.5 para el panel DSI-1 de 800×1280.</p>
<img src="/blog/echo-show8-terminal.png" alt="Terminal abierta en el Echo Show 8" style="width:100%;max-width:640px;border-radius:4px;margin:1.5rem 0;display:block;" />
<p>Terminal abierta directamente en el dispositivo vía SSH o sesión local bajo Phosh.</p>

<h2><a href="https://github.com/nexushouser92/echo-show8-postmarketos" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;border-bottom:2px solid currentColor;">Repositorio ↗</a></h2>
    `.trim(),
  },
  {
    slug: 'editores-midi-open-source-windows',
    title: 'El capitalismo informático y la obsolescencia programada',
    category: 'HERRAMIENTAS',
    date: '2026-09-14',
    dateFormatted: '14 Sep 2026',
    excerpt:
      'Cómo la industria del hardware musical programa la muerte de sus productos, y por qué el open source — acelerado por la IA — está cambiando las reglas.',
    content: `
<p>La mayoría de los controladores MIDI vienen atados a ecosistemas propietarios que requieren cuenta, actualizaciones forzadas o conexión a internet para funcionar. Las alternativas open source existen pero están dispersas. Este artículo es un mapa de lo que hay, lo que falta, y por qué esto importa más ahora que nunca.</p>

<h2>El capitalismo informático y la obsolescencia programada</h2>
<p>Existe un modelo de negocio consolidado en la industria del hardware musical: vender el controlador casi a precio de coste y recuperar el margen en el software de edición, las licencias de plugins y las suscripciones a nubes privadas. Native Access de Native Instruments es el ejemplo más visible — un intermediario obligatorio para usar hardware que ya compraste y pagaste. Komplete, Maschine Software, iZotope: todo pasa por su servidor. Si el servidor cierra, el hardware muere.</p>
<p>Esto no es un accidente. Es diseño. Los ciclos de actualización de firmware intencionalmente rompen compatibilidad con versiones anteriores. Los drivers dejan de firmarse para nuevas versiones de Windows. Las APIs se deprecan. El resultado es un controlador de 400€ que en 5 años ya no funciona con tu sistema operativo, no porque el hardware haya fallado, sino porque la empresa decidió que era hora de que compraras el modelo nuevo.</p>

<h2>El hardware MIDI antiguo no está obsoleto</h2>
<p>Un Korg nanoKONTROL2 de 2012, un Akai MPK Mini de 2010 o un Behringer BCR2000 de 2003 mandan exactamente el mismo protocolo MIDI que sus equivalentes actuales de gama alta. MIDI 1.0, publicado en 1983, sigue siendo el estándar dominante. El hardware no ha cambiado: lo que ha cambiado es el software que lo rodea.</p>
<p>Con las herramientas correctas, un BCR2000 con sus 32 encoders puede controlar cualquier DAW con la misma precisión que un controlador de 600€ de 2024. Un nanoKONTROL2 mapeado en Bitwig o Ableton es funcionalmente equivalente a un Arturia BeatStep Pro para muchos flujos de trabajo. La diferencia no está en el hardware — está en el acceso al software de configuración, que el fabricante convirtió en un producto separado o directamente abandonó.</p>

<h2>Qué hay disponible en open source</h2>
<p>Las opciones cubren casos concretos pero están fragmentadas. Para Behringer, varios controladores admiten edición vía SysEx con scripts Python — la especificación está documentada en foros y wikis comunitarias. El Korg nanoKONTROL2 tiene alternativas parciales como <code>korg-kontrol-editor</code> que corre en Linux. Para los controladores Numark la situación es más limitada: pocos proyectos activos, documentación SysEx incompleta.</p>
<p>La ausencia de una herramienta unificada no es técnica — es política. Fragmentar el soporte por modelo es la forma más efectiva de evitar que el open source se convierta en un reemplazo real del software oficial.</p>

<h2>La IA como nivelador</h2>
<p>Hasta hace dos o tres años, desarrollar un editor MIDI funcional requería semanas de ingeniería inversa del protocolo SysEx, conocimiento de frameworks de interfaz gráfica y tiempo que la mayoría de los músicos no tienen. Hoy, con modelos de lenguaje disponibles para cualquiera, el tiempo para ir de "quiero entender cómo funciona el SysEx de mi controlador" a "tengo un script funcional" se ha colapsado a horas.</p>
<p>Esto está cambiando el ecosistema en tiempo real. Proyectos que antes habrían necesitado un equipo de tres personas durante un año ahora los termina un desarrollador solo en un fin de semana. La documentación de protocolos propietarios se reconstruye colectivamente, el código se audita más rápido, y las barreras de entrada para contribuir a un proyecto open source se han reducido de forma dramática.</p>
<p>El open source siempre tuvo la ventaja moral. Ahora empieza a tener también la ventaja de velocidad.</p>

<h2>El enfoque de Obsidian</h2>
<p>Preferimos herramientas pequeñas y específicas a un editor genérico monolítico. Cada herramienta de esta colección tiene un único objetivo y lo cumple sin dependencias innecesarias, sin cuenta, sin servidor remoto. El código es legible, auditable y tuyo para siempre — independientemente de lo que decida la empresa que fabricó tu controlador.</p>
    `.trim(),
  },
  {
    slug: 'maschine-mk2-sin-native-access',
    title: 'Revivir Maschine MK2 de la obsolescencia programada',
    category: 'MIDI / SYNTH',
    date: '2026-08-20',
    dateFormatted: '20 Ago 2026',
    heroImage: '/blog/maschine-mk2.webp',
    heroImageAlt: 'Native Instruments Maschine MK2 con pads iluminados en rosa',
    excerpt:
      'Cómo reactivar y usar Maschine MK2 en el software Maschine 3.',
    content: `
<p>El Maschine MK2 fue durante años uno de los controladores de producción más completos del mercado. Hardware sólido, pads con respuesta excepcional, encoders de calidad y una integración profunda con el software Maschine que lo convirtió en el centro de trabajo de miles de productores. Nada de eso ha cambiado. Lo que cambió fue el soporte.</p>

<h2>La obsolescencia no llegó por el hardware</h2>
<p>Con la llegada de Maschine 3, Native Instruments rediseñó la arquitectura de su software. El resultado fue una experiencia mejorada para los modelos más recientes — pero los controladores de la generación MK1, MK2 y Mikro quedaron fuera de la compatibilidad oficial. No porque sus componentes hayan fallado. No porque el hardware sea incapaz. Sino porque el ciclo de producto avanzó y las versiones anteriores no entraron en el nuevo esquema de soporte.</p>
<p>Es un patrón conocido en la industria: el software evoluciona, los requisitos cambian, y controladores perfectamente funcionales quedan técnicamente huérfanos. No es malicia — es la lógica de un ecosistema que debe sostener su propio desarrollo.</p>

<h2>El parche que cambió todo</h2>
<p>El proyecto Obsidian MK2 Connect surgió exactamente de ahí: de la necesidad de cerrar esa brecha. El resultado es un parche completamente funcional que permite operar el Maschine MK2 dentro de Maschine 3 sin restricciones, sin bugs conocidos y sin comprometer ninguna función del flujo de trabajo habitual. Los pads responden, los encoders mapean correctamente, el transporte funciona, las pantallas muestran la información esperada. No hay workarounds ni parches parciales — el controlador opera como si fuera un dispositivo soportado oficialmente.</p>

<h2>Un antes y un después</h2>
<p>Lo que este proyecto representa va más allá de una solución técnica puntual. Demuestra que el hardware de la generación MK — considerado obsoleto por el mercado — tiene años de vida útil por delante. Que la decisión de qué es "obsoleto" no la toma el silicio, sino el software que lo rodea. Y que esa decisión puede revertirse.</p>
<p>Desde que se publicó el primer release, varios desarrolladores han tomado el proyecto como referencia para trabajar en soluciones similares para el MK1 y el Mikro. El código es abierto, la documentación está disponible y la comunidad alrededor de las Maschine de primera y segunda generación está más activa que en años.</p>

<h2>Obsidian MK2 Connect</h2>
<p>El proyecto automatiza el proceso de configuración y añade utilidades que simplifican la integración con Maschine 3. Sin cuenta. Sin intermediarios. Sin depender de que un servidor externo esté disponible. Solo el controlador y el software haciendo lo que siempre debieron hacer juntos.</p>
    `.trim(),
  },
  {
    slug: 'modo-demo-mixtrack-linux',
    title: 'Desactivar el modo demo del Mixtrack Pro FX en Linux',
    category: 'DJ HARDWARE',
    date: '2026-07-05',
    dateFormatted: '5 Jul 2026',
    heroImage: '/blog/mixtrack-pro.jpg',
    heroImageAlt: 'Numark Mixtrack Pro FX controlador DJ',
    heroImageBlend: true,
    excerpt:
      'El Mixtrack Pro FX y Platinum FX muestran una animación de luces al conectarse. Así se desactiva desde Linux con un script.',
    content: `
<p>Los controladores DJ Numark de la gama Mixtrack tienen un modo demo de luces que se activa automáticamente al conectar por USB. En Windows, la propia aplicación de Numark lo desactiva al arrancar. En Linux no hay aplicación oficial.</p>

<h2>La solución</h2>
<p>Un mensaje SysEx enviado por MIDI desactiva el modo demo de forma inmediata. El script del proyecto lo hace automáticamente en cuanto detecta el controlador conectado, sin necesidad de intervención manual.</p>

<h2>Cómo usarlo</h2>
<ol>
  <li>Conecta el controlador por USB</li>
  <li>Ejecuta el script con <code>python3 exit_demo.py</code></li>
  <li>El modo demo se desactiva y el controlador queda listo para mapear</li>
</ol>

<p>No requiere instalación. Solo necesitas Python 3 y la librería <code>python-rtmidi</code>, disponible en pip.</p>
    `.trim(),
  },
];
