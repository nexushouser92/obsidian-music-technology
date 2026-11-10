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

<h2><a href="https://github.com/nexushouser92/echo-show8-postmarketos" target="_blank" rel="noreferrer" style="color:inherit;text-decoration:none;border-bottom:2px solid currentColor;">Repositorio ↗</a></h2>
    `.trim(),
  },
  {
    slug: 'editores-midi-open-source-windows',
    title: 'Editores MIDI open source para Windows: qué existe y qué falta',
    category: 'HERRAMIENTAS',
    date: '2026-09-14',
    dateFormatted: '14 Sep 2026',
    excerpt:
      'Un recorrido por las opciones disponibles para editar configuraciones MIDI en Windows sin depender del software oficial del fabricante.',
    content: `
<p>La mayoría de los controladores MIDI vienen con editores propietarios que requieren cuenta, actualizaciones forzadas o conexión a internet. Las alternativas open source existen pero están dispersas.</p>

<h2>El problema</h2>
<p>No existe una herramienta unificada. Cada controlador tiene su protocolo SysEx y sus peculiaridades. Esto es exactamente lo que intentamos resolver con los proyectos de esta colección: herramientas pequeñas y específicas que hacen una sola cosa bien.</p>

<h2>Qué hay disponible</h2>
<p>Las opciones open source cubren casos concretos: algunos Behringer se pueden editar via SysEx con scripts Python, el Korg nanoKONTROL 2 tiene alternativas parciales. Para los controladores Numark la situación es más limitada.</p>

<h2>El enfoque de Obsidian</h2>
<p>Preferimos herramientas pequeñas y específicas a un editor genérico monolítico. Cada herramienta de esta colección tiene un único objetivo y lo cumple sin dependencias innecesarias.</p>
    `.trim(),
  },
  {
    slug: 'maschine-mk2-sin-native-access',
    title: 'Maschine MK2: control sin instalar Native Access',
    category: 'MIDI / SYNTH',
    date: '2026-08-20',
    dateFormatted: '20 Ago 2026',
    heroImage: '/blog/maschine-mk2.webp',
    heroImageAlt: 'Native Instruments Maschine MK2 con pads iluminados en rosa',
    excerpt:
      'Cómo conectar y usar el Maschine MK2 en Linux y Windows sin instalar Native Access ni el software oficial de NI.',
    content: `
<p>Native Access de Native Instruments es conocido por requerir cuenta online y ocupar recursos innecesarios para quienes solo quieren usar el hardware como controlador MIDI genérico.</p>

<h2>La alternativa</h2>
<p>El Maschine MK2 se comunica por USB MIDI estándar. Con el driver correcto en Windows —o sin ningún driver extra en Linux— el controlador aparece como dispositivo MIDI genérico y puede mapearse en cualquier DAW.</p>

<h2>Limitaciones</h2>
<p>No tendrás acceso a las funciones Komplete si no usas el software de NI. Pero si tu objetivo es mapear el controlador en tu DAW o herramienta preferida, esto es completamente suficiente.</p>

<h2>Obsidian MK2 Connect</h2>
<p>El proyecto Obsidian MK2 Connect automatiza este proceso y añade utilidades de configuración para simplificar la integración sin pasar por el ecosistema oficial de Native Instruments.</p>
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
