'use strict';

/* =========================================================================
 * CodeQuest — curso por niveles de HTML y JavaScript.
 *
 * Cada nivel aporta uno o más "fragmentos" de código. Un fragmento se
 * inserta en una ranura (@@nombre@@) definida por un nivel anterior, de modo
 * que el proyecto (una app de lista de tareas) se construye poco a poco.
 * Los espacios a completar se marcan con «respuesta» (o «a|b» si se aceptan
 * varias respuestas; la primera es la oficial).
 * ========================================================================= */

const LEVELS = [
  /* ---------------------------- MÓDULO HTML ---------------------------- */
  {
    module: 'HTML',
    title: 'El esqueleto',
    concept: `
      <p>Todo documento HTML empieza con la misma estructura. <code>&lt;!DOCTYPE html&gt;</code> le indica al navegador que es HTML moderno.</p>
      <p>Dentro de <code>&lt;html&gt;</code> hay dos partes: <code>&lt;head&gt;</code>, con información <em>sobre</em> la página (como el título de la pestaña), y <code>&lt;body&gt;</code>, con todo lo que se ve.</p>
      <p>Casi todas las etiquetas van en pares: una de apertura <code>&lt;body&gt;</code> y una de cierre <code>&lt;/body&gt;</code>.</p>`,
    goal: 'Completa los nombres de las etiquetas del esqueleto. La vista previa estará en blanco: ¡el body aún no tiene contenido!',
    hint: 'Las etiquetas principales son <code>html</code>, <code>head</code> y <code>body</code>. El texto de la pestaña va dentro de <code>title</code>.',
    done: 'Tu archivo ya tiene un esqueleto HTML válido.',
    fragments: [{
      target: null,
      code: `
        <!DOCTYPE «html»>
        <«html» lang="es">
          <«head»>
            <meta charset="UTF-8">
            <«title»>Mi lista de tareas</title>
            @@head@@
          </head>
          <«body»>
            @@body@@
          </«body»>
        </html>`,
    }],
  },
  {
    module: 'HTML',
    title: 'Títulos y párrafos',
    concept: `
      <p>Los títulos van de <code>&lt;h1&gt;</code> (el más importante) a <code>&lt;h6&gt;</code>. Una página suele tener un solo <code>h1</code>.</p>
      <p>Los párrafos de texto se escriben con <code>&lt;p&gt;</code>, y para resaltar una palabra importante se usa <code>&lt;strong&gt;</code> (se ve en negrita).</p>`,
    goal: 'Agrega un título principal y un párrafo de presentación.',
    hint: 'Título principal: <code>h1</code>. Párrafo: <code>p</code>. Texto importante: <code>strong</code>.',
    done: 'Tu página ya muestra un título y un texto.',
    fragments: [{
      target: 'body',
      code: `
        <«h1»>Mi lista de tareas</«h1»>
        <«p»>Organiza tu día con <«strong»>HTML</strong> y JavaScript.</p>`,
    }],
  },
  {
    module: 'HTML',
    title: 'Listas',
    concept: `
      <p>Una lista sin orden se crea con <code>&lt;ul&gt;</code> (<em>unordered list</em>) y cada elemento con <code>&lt;li&gt;</code> (<em>list item</em>).</p>
      <p>Si el orden importa (pasos de una receta, por ejemplo) se usa <code>&lt;ol&gt;</code>. Un subtítulo se escribe con <code>&lt;h2&gt;</code>.</p>`,
    goal: 'Crea un subtítulo y una lista con lo que vas a aprender.',
    hint: 'Subtítulo: <code>h2</code>. Lista con viñetas: <code>ul</code>. Cada elemento: <code>li</code>.',
    done: 'Tu página ya tiene una lista.',
    fragments: [{
      target: 'body',
      code: `
        <«h2»>¿Qué voy a aprender?</h2>
        <«ul»>
          <«li»>Estructura con HTML</li>
          <li>Interactividad con JavaScript</«li»>
        </ul>`,
    }],
  },
  {
    module: 'HTML',
    title: 'Enlaces y atributos',
    concept: `
      <p>Los <strong>atributos</strong> dan información extra a una etiqueta y se escriben así: <code>nombre="valor"</code>.</p>
      <p>Un enlace es la etiqueta <code>&lt;a&gt;</code>. Su atributo <code>href</code> indica a dónde lleva, y <code>target="_blank"</code> lo abre en una pestaña nueva.</p>
      <p><code>&lt;hr&gt;</code> dibuja una línea separadora. Es una etiqueta <em>vacía</em>: no necesita cierre.</p>`,
    goal: 'Agrega un enlace a la documentación de MDN y una línea separadora.',
    hint: 'La etiqueta de enlace es <code>a</code>. La dirección va en <code>href</code> y la pestaña nueva en <code>target</code>. La línea horizontal es <code>hr</code>.',
    done: 'Tu página ya enlaza a otras páginas.',
    fragments: [{
      target: 'body',
      code: `
        <p>
          Aprende más en
          <«a» «href»="https://developer.mozilla.org/es/" «target»="_blank">MDN Web Docs</a>
        </p>
        <«hr»>`,
    }],
  },
  {
    module: 'HTML',
    title: 'Secciones e identificadores',
    concept: `
      <p>Para agrupar contenido relacionado se usan contenedores como <code>&lt;section&gt;</code> o <code>&lt;div&gt;</code>.</p>
      <p>El atributo <code>id</code> le da un nombre <strong>único</strong> a un elemento. Más adelante, JavaScript usará estos ids para encontrar elementos y modificarlos.</p>`,
    goal: 'Crea la sección donde vivirá tu app de tareas y dale el id "app".',
    hint: 'El contenedor es <code>section</code> y el nombre único se da con el atributo <code>id</code>.',
    done: 'Tu página ya tiene una sección para la app.',
    fragments: [{
      target: 'body',
      code: `
        <«section» «id»="app">
          <h2>Mis tareas</h2>
          @@app@@
        </«section»>`,
    }],
  },
  {
    module: 'HTML',
    title: 'Formularios',
    concept: `
      <p>Un <code>&lt;form&gt;</code> agrupa campos para que el usuario escriba datos.</p>
      <p><code>&lt;input&gt;</code> es un campo; su atributo <code>type</code> define qué tipo de dato recibe (<code>text</code>, <code>email</code>, <code>number</code>…) y <code>placeholder</code> muestra un texto de ayuda gris.</p>
      <p>Un <code>&lt;button type="submit"&gt;</code> envía el formulario. También dejamos preparada una lista vacía y un párrafo para el contador.</p>`,
    goal: 'Construye el formulario para escribir nuevas tareas.',
    hint: 'Necesitas <code>form</code>, <code>input</code> y <code>button</code>. Los atributos del input son <code>type</code> y <code>placeholder</code>.',
    done: '¡Tu página ya tiene un formulario! (Aún no hace nada… eso lo hará JavaScript).',
    fragments: [{
      target: 'app',
      code: `
        <«form» id="formulario">
          <«input» «type»="text" id="tarea" «placeholder»="Escribe una tarea">
          <«button» type="submit">Agregar</button>
        </form>
        <«ul» id="lista"></ul>
        <p id="contador"></p>`,
    }],
  },

  /* ------------------------- MÓDULO JAVASCRIPT ------------------------- */
  {
    module: 'JS',
    title: 'Tu primer script',
    concept: `
      <p>JavaScript se agrega dentro de la etiqueta <code>&lt;script&gt;</code>. La ponemos al final del <code>body</code> para que el HTML ya esté cargado cuando el código se ejecute.</p>
      <p><code>console.log(...)</code> escribe mensajes en la consola. Es la herramienta n.º 1 para ver qué está pasando en tu programa. Mira el panel <strong>Consola</strong> a la derecha.</p>`,
    goal: 'Abre una etiqueta script y muestra un saludo en la consola.',
    hint: 'La etiqueta es <code>script</code> y el mensaje se imprime con <code>console.log</code>.',
    done: 'Tu página ya ejecuta JavaScript.',
    fragments: [{
      target: 'body',
      code: `
        <«script»>
          «console».«log»("¡Hola desde JavaScript!");
          @@script@@
        </script>`,
    }],
  },
  {
    module: 'JS',
    title: 'Variables y el DOM',
    concept: `
      <p>Una <strong>variable</strong> guarda un valor con un nombre. Se declara con <code>const</code> si no va a cambiar, o con <code>let</code> si sí cambiará.</p>
      <p>El <strong>DOM</strong> es la página vista desde JavaScript: el objeto <code>document</code>. Con <code>document.querySelector("h1")</code> obtienes el primer <code>h1</code>, y con su propiedad <code>textContent</code> puedes cambiar su texto.</p>`,
    goal: 'Selecciona el título h1 y cambia su texto desde JavaScript.',
    hint: 'Declara con <code>const</code>, busca con <code>document.querySelector</code> y cambia el texto con <code>textContent</code>.',
    done: 'JavaScript ya modifica tu página.',
    fragments: [{
      target: 'script',
      code: `
        «const» titulo = «document».«querySelector»("h1");
        titulo.«textContent» = "📝 Mis tareas de hoy";`,
    }],
  },
  {
    module: 'JS',
    title: 'Buscar elementos por id',
    concept: `
      <p>¿Recuerdas los <code>id</code> del formulario? <code>document.getElementById("nombre")</code> devuelve el elemento con ese id exacto.</p>
      <p>Guardaremos en variables las cuatro piezas de la app que usaremos: el formulario, el campo de texto, la lista y el contador.</p>`,
    goal: 'Guarda en variables los elementos de la app usando sus ids.',
    hint: 'El método es <code>getElementById</code>. Revisa en el HTML qué id tienen el input y la lista: <code>tarea</code> y <code>lista</code>.',
    done: 'Tu código ya tiene acceso a cada pieza de la app.',
    fragments: [{
      target: 'script',
      code: `
        const formulario = document.«getElementById»("formulario");
        const input = document.getElementById("«tarea»");
        const lista = document.getElementById("«lista»");
        const contador = document.getElementById("contador");`,
    }],
  },
  {
    module: 'JS',
    title: 'Arreglos (arrays)',
    concept: `
      <p>Un <strong>arreglo</strong> es una lista de valores entre corchetes: <code>["a", "b", "c"]</code>. Es perfecto para guardar nuestras tareas.</p>
      <p>Usamos <code>let</code> porque la lista cambiará. <code>push(...)</code> agrega un elemento al final y <code>length</code> dice cuántos elementos tiene.</p>`,
    goal: 'Crea el arreglo de tareas, agrega una más y muestra cuántas hay en la consola.',
    hint: 'Declara con <code>let</code>, los corchetes son <code>[</code> y <code>]</code>, se agrega con <code>push</code> y se cuenta con <code>length</code>.',
    done: 'Tu app ya guarda datos en un arreglo.',
    fragments: [{
      target: 'script',
      code: `
        «let» tareas = «[»"Aprender HTML", "Practicar JavaScript"«]»;
        tareas.«push»("Construir mi app");
        @@init@@
        console.log("Total de tareas:", tareas.«length»);`,
    }],
  },
  {
    module: 'JS',
    title: 'Funciones y bucles',
    concept: `
      <p>Una <strong>función</strong> agrupa código para reutilizarlo: se define con <code>function nombre() { ... }</code> y se ejecuta escribiendo <code>nombre()</code>.</p>
      <p>El bucle <code>for (const tarea of tareas)</code> recorre el arreglo elemento por elemento. Por cada tarea creamos un <code>&lt;li&gt;</code> con <code>document.createElement</code> y lo agregamos a la lista con <code>appendChild</code>.</p>`,
    goal: 'Escribe la función render() que dibuja todas las tareas en la página, y llámala.',
    hint: 'Palabras clave: <code>function</code>, <code>for</code> … <code>of</code>. Métodos: <code>createElement</code> y <code>appendChild</code>. Para llamar a la función: <code>()</code>.',
    done: '¡Tus tareas ya aparecen en la página!',
    fragments: [{
      target: 'script',
      code: `
        «function» render() {
          lista.innerHTML = "";
          «for» (const tarea «of» tareas) {
            const li = document.«createElement»("li");
            li.textContent = tarea;
            @@item@@
            lista.«appendChild»(li);
          }
          @@render@@
        }

        render«()»;`,
    }],
  },
  {
    module: 'JS',
    title: 'Plantillas de texto',
    concept: `
      <p>Las <strong>plantillas de texto</strong> (<em>template literals</em>) se escriben entre comillas invertidas <code>\`...\`</code> y permiten meter valores dentro del texto con <code>\${...}</code>.</p>
      <p>Ejemplo: <code>\`Hola \${nombre}\`</code>. Lo usaremos dentro de <code>render()</code> para mostrar cuántas tareas hay.</p>`,
    goal: 'Muestra en el contador cuántas tareas pendientes hay.',
    hint: 'Para insertar un valor se abre con <code>${</code>. El número de elementos del arreglo está en <code>length</code>.',
    done: 'Tu app ya cuenta las tareas.',
    fragments: [{
      target: 'render',
      code: `
        contador.textContent = \`Tienes «\${»tareas.«length»} tareas pendientes\`;`,
    }],
  },
  {
    module: 'JS',
    title: 'Eventos',
    concept: `
      <p>Un <strong>evento</strong> es algo que ocurre en la página: un clic, una tecla, enviar un formulario… Con <code>elemento.addEventListener("evento", función)</code> decides qué hacer cuando ocurre.</p>
      <p>Al enviar un formulario el navegador recarga la página; <code>evento.preventDefault()</code> lo evita. Luego leemos lo escrito con <code>input.value</code>, lo agregamos al arreglo y volvemos a dibujar.</p>`,
    goal: 'Haz que el formulario agregue tareas nuevas. ¡Pruébalo en la vista previa!',
    hint: 'Método: <code>addEventListener</code>. Evento del formulario: <code>submit</code>. Evitar recarga: <code>preventDefault</code>. Texto del campo: <code>value</code>. Agregar al arreglo: <code>push</code>.',
    done: '¡Tu app ya es interactiva! Puedes agregar tareas.',
    fragments: [{
      target: 'script',
      code: `
        formulario.«addEventListener»("«submit»", function (evento) {
          evento.«preventDefault»();
          const texto = input.«value».trim();
          @@validar@@
          tareas.«push»(texto);
          input.value = "";
          render();
          @@agregada@@
        });`,
    }],
  },
  {
    module: 'JS',
    title: 'Condicionales',
    concept: `
      <p>Ahora mismo se pueden agregar tareas vacías. 😬 Un <strong>condicional</strong> <code>if (condición) { ... }</code> ejecuta código solo si la condición es verdadera.</p>
      <p><code>===</code> compara si dos valores son exactamente iguales, y <code>return</code> termina la función en ese punto (así no se agrega nada).</p>`,
    goal: 'Evita que se agreguen tareas vacías y avisa con un warning en la consola.',
    hint: 'Usa <code>if</code>, compara con <code>===</code>, avisa con <code>console.warn</code> y sal de la función con <code>return</code>.',
    done: 'Tu app ya valida lo que escribe el usuario.',
    fragments: [{
      target: 'validar',
      code: `
        «if» (texto «===|==» "") {
          console.«warn»("No puedes agregar una tarea vacía");
          «return»;
        }`,
    }],
  },
  {
    module: 'JS',
    title: 'Completar tareas',
    concept: `
      <p>Las <strong>funciones flecha</strong> son una forma corta de escribir funciones: <code>() =&gt; { ... }</code>.</p>
      <p><code>filter</code> crea un arreglo nuevo solo con los elementos que cumplen una condición. Con <code>t !== tarea</code> nos quedamos con todas las tareas <em>excepto</em> la que se pulsó. <code>!==</code> significa «distinto de».</p>`,
    goal: 'Haz que al hacer clic en una tarea, esta se elimine de la lista.',
    hint: 'El evento es <code>click</code>. La flecha se escribe <code>=&gt;</code>. El método es <code>filter</code> y «distinto de» es <code>!==</code>.',
    done: 'Ya puedes marcar tareas como completadas con un clic.',
    fragments: [{
      target: 'item',
      code: `
        li.title = "Haz clic para completarla";
        li.addEventListener("«click»", () «=>» {
          tareas = tareas.«filter»((t) => t «!==» tarea);
          render();
        });`,
    }],
  },
  {
    module: 'JS',
    title: 'Guardar con localStorage',
    concept: `
      <p>Si recargas la página, las tareas se pierden. <code>localStorage</code> guarda datos en el navegador aunque cierres la pestaña.</p>
      <p>Solo guarda texto, así que convertimos el arreglo con <code>JSON.stringify</code> al guardar (<code>setItem</code>) y lo recuperamos con <code>JSON.parse</code> al leer (<code>getItem</code>).</p>`,
    goal: 'Guarda las tareas cada vez que se dibujan y cárgalas al iniciar. ¡Después pulsa ↻ Ejecutar y verás que siguen ahí!',
    hint: 'Leer: <code>localStorage.getItem</code> + <code>JSON.parse</code>. Guardar: <code>localStorage.setItem</code> + <code>JSON.stringify</code>.',
    done: '¡Tu app recuerda las tareas! Has construido una aplicación web completa.',
    fragments: [
      {
        target: 'init',
        code: `
          const guardadas = «localStorage».«getItem»("tareas");
          if (guardadas) {
            tareas = JSON.«parse»(guardadas);
          }`,
      },
      {
        target: 'render',
        code: `
          localStorage.«setItem»("tareas", JSON.«stringify»(tareas));`,
      },
    ],
  },

  /* ---------------------- MÓDULO PROYECTO AVANZADO ---------------------- */
  {
    module: 'PRO',
    title: 'Estilos con <style>',
    concept: `
      <p>HTML define el <em>contenido</em>; el <strong>CSS</strong> define cómo se <em>ve</em>. Se puede escribir dentro de la etiqueta <code>&lt;style&gt;</code>, en el <code>head</code>.</p>
      <p>Una regla CSS tiene un <strong>selector</strong> (a qué elementos aplica) y propiedades <code>propiedad: valor;</code>. Los selectores pueden ser etiquetas (<code>li</code>), ids (<code>#app</code>) o clases (<code>.urgente</code>).</p>`,
    goal: 'Dale estilo a tu app: tipografía, una tarjeta para la sección y un cursor de mano sobre las tareas.',
    hint: 'La etiqueta es <code>style</code>. Para el id "app" el selector es <code>#app</code>. Propiedades: <code>font-family</code>, <code>cursor</code> y <code>color</code>.',
    done: 'Tu app ya tiene estilo propio.',
    fragments: [{
      target: 'head',
      code: `
        <«style»>
          body {
            «font-family»: system-ui, sans-serif;
            max-width: 640px;
            margin: 0 auto;
            padding: 16px;
          }
          «#app» {
            background: #f3f0ff;
            padding: 16px;
            border-radius: 12px;
          }
          li {
            «cursor»: pointer;
            padding: 4px 0;
          }
          .urgente {
            «color»: #dc2626;
            font-weight: bold;
          }
        </«style»>`,
    }],
  },
  {
    module: 'PRO',
    title: 'Botón «Borrar todo»',
    concept: `
      <p>Cualquier elemento puede escuchar eventos, no solo los formularios. Un <code>&lt;button&gt;</code> fuera de un formulario no envía nada: solo dispara el evento <code>click</code>.</p>
      <p>Para vaciar la lista basta con asignar un arreglo vacío <code>[]</code> a <code>tareas</code> y volver a dibujar.</p>`,
    goal: 'Agrega un botón que borre todas las tareas de una vez.',
    hint: 'La etiqueta es <code>button</code>, su id es <code>borrar</code>, el evento es <code>click</code> y el arreglo vacío es <code>[]</code>.',
    done: 'Ya puedes vaciar la lista con un clic.',
    fragments: [
      {
        target: 'app',
        code: `
          <«button» id="borrar">🗑 Borrar todo</button>`,
      },
      {
        target: 'script',
        code: `
          const btnBorrar = document.getElementById("«borrar»");
          btnBorrar.addEventListener("«click»", () => {
            tareas = «[]»;
            render();
          });`,
      },
    ],
  },
  {
    module: 'PRO',
    title: 'if / else y ternario',
    concept: `
      <p><code>if (...) { ... } else { ... }</code> elige entre dos caminos: si la condición se cumple, se ejecuta el primero; si no, el <code>else</code>.</p>
      <p>Para elegir entre dos <em>valores</em> hay un atajo: el <strong>operador ternario</strong> <code>condición ? valorSi : valorNo</code>. Lo usaremos para escribir «1 tarea» en singular y «3 tareas» en plural.</p>`,
    goal: 'Mejora el contador: un mensaje especial con 0 tareas y singular/plural correcto.',
    hint: 'Usa <code>if</code> y <code>else</code>. El ternario se escribe con <code>?</code> y <code>:</code>.',
    done: 'Tu contador ya habla con buena gramática.',
    fragments: [{
      target: 'render',
      code: `
        «if» (tareas.length === 0) {
          contador.textContent = "¡No tienes tareas pendientes! 🎉";
        } «else» {
          const palabra = tareas.length === 1 «?» "tarea" «:» "tareas";
          contador.textContent = \`Tienes \${tareas.length} \${palabra} pendientes\`;
        }`,
    }],
  },
  {
    module: 'PRO',
    title: 'Buscar tareas',
    concept: `
      <p>Los textos tienen métodos útiles: <code>toLowerCase()</code> pasa todo a minúsculas e <code>includes("x")</code> dice si un texto contiene a otro.</p>
      <p>El evento <code>input</code> se dispara cada vez que el usuario escribe. Dentro de un bucle, <code>continue</code> salta a la siguiente vuelta: así no dibujamos las tareas que no coinciden con la búsqueda.</p>`,
    goal: 'Agrega un buscador que filtre las tareas mientras escribes.',
    hint: 'Campo de búsqueda: <code>input</code> con type <code>search</code>. Declara con <code>let</code>. Métodos: <code>includes</code> y <code>toLowerCase</code>. Saltar vuelta: <code>continue</code>. Evento al escribir: <code>input</code>.',
    done: 'Tu app ya tiene un buscador en vivo.',
    fragments: [
      {
        target: 'app',
        code: `
          <«input» type="«search»" id="buscar" placeholder="🔍 Buscar tarea">`,
      },
      {
        target: 'init',
        code: `
          «let» filtro = "";`,
      },
      {
        target: 'item',
        code: `
          if (!tarea.toLowerCase().«includes»(filtro)) {
            «continue»;
          }`,
      },
      {
        target: 'script',
        code: `
          const buscar = document.getElementById("buscar");
          buscar.addEventListener("«input»", () => {
            filtro = buscar.value.«toLowerCase»();
            render();
          });`,
      },
    ],
  },
  {
    module: 'PRO',
    title: 'Evitar duplicados',
    concept: `
      <p>Los arreglos también tienen <code>includes(valor)</code>: devuelve <code>true</code> si el valor ya está en el arreglo.</p>
      <p>Lo usaremos dentro de la validación del formulario para no agregar dos veces la misma tarea.</p>`,
    goal: 'Impide agregar una tarea que ya existe y avisa en la consola.',
    hint: 'Método del arreglo: <code>includes</code>. Aviso: <code>console.warn</code>. Salir de la función: <code>return</code>.',
    done: 'Tu lista ya no acepta tareas repetidas.',
    fragments: [{
      target: 'validar',
      code: `
        if (tareas.«includes»(texto)) {
          console.«warn»(\`"\${texto}" ya está en la lista\`);
          «return»;
        }`,
    }],
  },
  {
    module: 'PRO',
    title: 'Tareas urgentes',
    concept: `
      <p><code>startsWith("x")</code> indica si un texto empieza por cierto carácter.</p>
      <p>Cada elemento tiene <code>classList</code>, una lista de sus clases CSS: con <code>classList.add("clase")</code> se agrega una. ¿Recuerdas la regla <code>.urgente</code> del nivel de estilos? Ahora la activamos desde JavaScript.</p>`,
    goal: 'Las tareas que empiecen con "!" deben verse en rojo. Prueba agregando "!Pagar la luz".',
    hint: 'Método de texto: <code>startsWith</code>. Lista de clases: <code>classList</code>. Agregar una clase: <code>add</code>.',
    done: 'Tu app ya destaca las tareas urgentes.',
    fragments: [{
      target: 'item',
      code: `
        if (tarea.«startsWith»("!")) {
          li.«classList».«add»("urgente");
        }`,
    }],
  },
  {
    module: 'PRO',
    title: 'Ordenar la lista',
    concept: `
      <p><code>sort()</code> ordena un arreglo <em>modificándolo</em>. Recibe una función que compara dos elementos <code>a</code> y <code>b</code>.</p>
      <p><code>a.localeCompare(b)</code> compara textos respetando el idioma (acentos, ñ…), ideal para ordenar alfabéticamente.</p>`,
    goal: 'Agrega un botón que ordene las tareas de la A a la Z.',
    hint: 'Escuchar el clic: <code>addEventListener</code>. Ordenar: <code>sort</code>. Comparar textos: <code>localeCompare</code>.',
    done: 'Ya puedes ordenar tus tareas alfabéticamente.',
    fragments: [
      {
        target: 'app',
        code: `
          <button id="«ordenar»">🔤 Ordenar A-Z</button>`,
      },
      {
        target: 'script',
        code: `
          document.getElementById("ordenar").«addEventListener»("click", () => {
            tareas.«sort»((a, b) => a.«localeCompare»(b));
            render();
          });`,
      },
    ],
  },
  {
    module: 'PRO',
    title: 'Mensajes temporales',
    concept: `
      <p><code>setTimeout(función, milisegundos)</code> ejecuta una función <strong>después</strong> de cierto tiempo. 1000 milisegundos = 1 segundo.</p>
      <p>Mostraremos «✔ Tarea agregada» al añadir una tarea y lo borraremos a los 2 segundos.</p>`,
    goal: 'Muestra un mensaje de confirmación que desaparezca a los 2 segundos.',
    hint: 'El id del párrafo es <code>mensaje</code>. La función es <code>setTimeout</code> y 2 segundos son <code>2000</code> milisegundos.',
    done: 'Tu app ya da retroalimentación al usuario.',
    fragments: [
      {
        target: 'app',
        code: `
          <p id="mensaje"></p>`,
      },
      {
        target: 'script',
        code: `
          const mensaje = document.getElementById("«mensaje»");`,
      },
      {
        target: 'agregada',
        code: `
          mensaje.textContent = "✔ Tarea agregada";
          «setTimeout»(() => {
            mensaje.textContent = "";
          }, «2000»);`,
      },
    ],
  },
  {
    module: 'PRO',
    title: 'Atajos de teclado',
    concept: `
      <p>El evento <code>keydown</code> se dispara al presionar una tecla. La función recibe un objeto <code>evento</code> con información; <code>evento.key</code> dice qué tecla fue (<code>"Enter"</code>, <code>"Escape"</code>, <code>"a"</code>…).</p>
      <p>Escuchándolo en <code>document</code> funciona sin importar qué elemento tenga el foco.</p>`,
    goal: 'Al presionar Escape, limpia el campo de texto y la búsqueda. Haz clic en la vista previa y pruébalo.',
    hint: 'Evento: <code>keydown</code>. Propiedad con la tecla: <code>key</code>. Nombre de la tecla: <code>Escape</code>.',
    done: 'Tu app ya responde al teclado.',
    fragments: [{
      target: 'script',
      code: `
        document.addEventListener("«keydown»", (evento) => {
          if (evento.«key» === "«Escape»") {
            input.value = "";
            buscar.value = "";
            filtro = "";
            render();
          }
        });`,
    }],
  },
  {
    module: 'PRO',
    title: 'Parámetros y return',
    concept: `
      <p>Las funciones pueden recibir datos (<strong>parámetros</strong>) y devolver un resultado con <code>return</code>. Así se pueden reutilizar con distintos valores.</p>
      <p>Usaremos un <strong>acumulador</strong>: una variable que empieza en <code>0</code> y en cada vuelta del bucle suma algo con <code>+=</code>.</p>`,
    goal: 'Crea una función que cuente cuántas letras suman todas tus tareas y muéstralo en la página.',
    hint: 'El acumulador empieza en <code>0</code>, se suma con <code>+=</code> y se devuelve con <code>return</code>. Luego llama a <code>contarLetras</code>.',
    done: '¡Completaste el proyecto avanzado! Tu app usa HTML, CSS y JavaScript de verdad.',
    fragments: [
      {
        target: 'app',
        code: `
          <p id="stats"></p>`,
      },
      {
        target: 'render',
        code: `
          document.getElementById("stats").textContent = \`Letras escritas: \${«contarLetras»(tareas)}\`;`,
      },
      {
        target: 'script',
        code: `
          «function» contarLetras(arreglo) {
            let total = «0»;
            for (const t of arreglo) {
              total «+=» t.length;
            }
            «return» total;
          }`,
      },
    ],
  },
];

const MODULES = {
  HTML: { name: 'Módulo 1 · HTML', badge: 'HTML', cls: '' },
  JS: { name: 'Módulo 2 · JavaScript', badge: 'JavaScript', cls: 'js' },
  PRO: { name: 'Módulo 3 · Proyecto avanzado', badge: 'Proyecto', cls: 'pro' },
};

/* Vocabulario para el autocompletado (además de las respuestas de cada nivel). */
const VOCAB = {
  html: ['html', 'head', 'body', 'title', 'meta', 'h1', 'h2', 'h3', 'p', 'strong', 'em', 'ul', 'ol', 'li',
    'a', 'href', 'target', 'img', 'src', 'alt', 'hr', 'br', 'section', 'div', 'span', 'id', 'class',
    'form', 'input', 'button', 'type', 'placeholder', 'label', 'script', 'style', 'link', 'header', 'footer', 'nav', 'main'],
  js: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'of', 'in', 'while', 'console',
    'log', 'warn', 'error', 'document', 'querySelector', 'querySelectorAll', 'getElementById', 'textContent',
    'innerHTML', 'createElement', 'appendChild', 'addEventListener', 'submit', 'click', 'input', 'preventDefault',
    'value', 'push', 'pop', 'length', 'filter', 'map', 'forEach', '===', '!==', '==', '!=', '=>', '()', '[', ']',
    '${', 'localStorage', 'getItem', 'setItem', 'removeItem', 'JSON', 'parse', 'stringify', 'true', 'false', 'null',
    'tarea', 'lista', 'contador', 'formulario', 'else', 'continue', 'includes', 'toLowerCase', 'toUpperCase',
    'startsWith', 'endsWith', 'classList', 'add', 'remove', 'toggle', 'sort', 'localeCompare', 'setTimeout',
    'setInterval', 'keydown', 'keyup', 'key', 'Escape', 'Enter', '?', ':', '+=', '-=', 'search'],
  css: ['color', 'background', 'background-color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding',
    'border', 'border-radius', 'cursor', 'display', 'width', 'max-width', 'height', 'text-align', 'style',
    'body', '#app', '.urgente', 'li', 'pointer', 'bold', 'flex', 'none'],
};

const DESCRIPTIONS = {
  html: 'raíz', head: 'metadatos', body: 'contenido', title: 'título pestaña', h1: 'título', h2: 'subtítulo',
  p: 'párrafo', strong: 'importante', ul: 'lista', ol: 'lista numerada', li: 'elemento lista', a: 'enlace',
  href: 'destino', target: 'dónde abrir', hr: 'separador', section: 'sección', div: 'contenedor', id: 'nombre único',
  form: 'formulario', input: 'campo', button: 'botón', type: 'tipo', placeholder: 'texto de ayuda', script: 'JavaScript',
  const: 'constante', let: 'variable', function: 'función', return: 'salir', if: 'condición', for: 'bucle', of: 'de',
  console: 'consola', log: 'imprimir', warn: 'advertencia', document: 'la página', querySelector: 'buscar (CSS)',
  getElementById: 'buscar por id', textContent: 'texto', createElement: 'crear elemento', appendChild: 'agregar hijo',
  addEventListener: 'escuchar evento', preventDefault: 'evitar acción', value: 'valor', push: 'agregar al final',
  length: 'cantidad', filter: 'filtrar', '===': 'igual', '!==': 'distinto', '=>': 'flecha', '${': 'insertar valor',
  localStorage: 'almacenamiento', getItem: 'leer', setItem: 'guardar', parse: 'texto → dato', stringify: 'dato → texto',
  else: 'si no', continue: 'saltar vuelta', includes: 'contiene', toLowerCase: 'a minúsculas', startsWith: 'empieza con',
  classList: 'clases CSS', sort: 'ordenar', localeCompare: 'comparar textos', setTimeout: 'ejecutar después',
  keydown: 'tecla presionada', key: 'qué tecla', '?': 'ternario', '+=': 'sumar y asignar', style: 'estilos CSS',
  color: 'color de texto', 'font-family': 'tipografía', cursor: 'puntero', '#app': 'selector por id', search: 'búsqueda',
};

/* =========================================================================
 * Preparación de datos
 * ========================================================================= */

function dedent(str) {
  const lines = str.replace(/^\n+/, '').replace(/\s+$/, '').split('\n');
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length);
  const min = Math.min(...indents);
  return lines.map((l) => l.slice(min));
}

const BLANKS = {}; // id -> blank

LEVELS.forEach((lv, li) => {
  let n = 0;
  lv.blanks = [];
  lv.parsed = lv.fragments.map((fr) => ({
    target: fr.target,
    lines: dedent(fr.code).map((line) => {
      const slot = line.trim().match(/^@@(\w+)@@$/);
      if (slot) return { slot: slot[1], indent: line.match(/^ */)[0] };
      const segs = [];
      const re = /«([^»]+)»/g;
      let last = 0;
      let m;
      while ((m = re.exec(line))) {
        if (m.index > last) segs.push({ t: 'text', v: line.slice(last, m.index) });
        const accept = m[1].split('|');
        const b = { t: 'blank', id: `${li}-${n++}`, level: li, answer: accept[0], accept, lang: 'html' };
        lv.blanks.push(b);
        BLANKS[b.id] = b;
        segs.push(b);
        last = re.lastIndex;
      }
      if (last < line.length) segs.push({ t: 'text', v: line.slice(last) });
      return { segs };
    }),
  }));
});

/** Ensambla el archivo completo hasta el nivel `upto` (incluido). */
function assemble(upto) {
  const out = [];
  function emit(frag, level, indent) {
    for (const ln of frag.lines) {
      if (ln.slot) {
        for (let i = 0; i <= upto; i++) {
          LEVELS[i].parsed.forEach((f) => {
            if (f.target === ln.slot) emit(f, i, indent + ln.indent);
          });
        }
      } else {
        out.push({ level, indent, segs: ln.segs });
      }
    }
  }
  emit(LEVELS[0].parsed[0], 0, '');

  // Detecta qué líneas son HTML, CSS (<style>) o JavaScript (<script>).
  let inside = 'html';
  for (const l of out) {
    const raw = l.segs.map((s) => (s.t === 'text' ? s.v : s.answer)).join('');
    const open = raw.match(/<(script|style)\b/i);
    const close = raw.match(/<\/(script|style)\b/i);
    if (open || close) {
      l.lang = 'html';
      inside = open && !close ? (open[1].toLowerCase() === 'script' ? 'js' : 'css') : 'html';
    } else {
      l.lang = inside;
    }
    l.segs.forEach((s) => { if (s.t === 'blank') s.lang = l.lang; });
  }
  return out;
}

function buildSource(lines, valueOf) {
  return lines.map((l) => {
    const s = l.segs.map((x) => (x.t === 'text' ? x.v : valueOf(x))).join('');
    return s ? l.indent + s : '';
  }).join('\n');
}

// Pools de autocompletado por lenguaje.
const POOLS = Object.fromEntries(Object.entries(VOCAB).map(([k, v]) => [k, new Set(v)]));
LEVELS.forEach((_, i) => assemble(i)); // asigna lang a todos los blanks
Object.values(BLANKS).forEach((b) => b.accept.forEach((a) => POOLS[b.lang].add(a)));
const POOL_LIST = Object.fromEntries(Object.entries(POOLS).map(([k, v]) => [k, [...v]]));

/* =========================================================================
 * Estado y persistencia
 * ========================================================================= */

const STORAGE_KEY = 'codequest.progress.v1';

function freshProgress() {
  return { completed: {}, current: 0, drafts: {}, flags: {} };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshProgress();
    return { ...freshProgress(), ...JSON.parse(raw) };
  } catch {
    return freshProgress();
  }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* sin almacenamiento */ }
}

let progress = loadProgress();
let cur = 0;
let lines = [];
let inputs = {};

const isUnlocked = (i) => i === 0 || progress.completed[i - 1] != null;
const flagsOf = (i) => (progress.flags[i] ||= { hint: false, solved: false });
const valueOf = (b) => (b.level < cur ? b.answer : (progress.drafts[b.id] ?? ''));

/* =========================================================================
 * Resaltado de sintaxis
 * ========================================================================= */

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const RE_JS = /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`)|\b(const|let|var|function|return|if|else|for|of|in|while|new|true|false|null)\b|\b(\d+(?:\.\d+)?)\b|([A-Za-z_$][\w$]*)(?=\s*\()/g;
const RE_HTML = /(<!--.*?-->)|("[^"]*")|(<\/?)([A-Za-z!][\w-]*)?|(\/?>)|([A-Za-z_:][\w:-]*)(?==)/g;

const RE_CSS = /(\/\*.*?\*\/)|([#.]?[A-Za-z_][\w-]*)(?=\s*\{)|([A-Za-z-]+)(?=\s*:)|(#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|em|rem|%|s)?\b)/g;

function hl(text, lang) {
  if (lang === 'css') return hlCss(text);
  const re = lang === 'js' ? RE_JS : RE_HTML;
  re.lastIndex = 0;
  let out = '';
  let last = 0;
  let m;
  const wrap = (cls, s) => `<span class="${cls}">${esc(s)}</span>`;
  while ((m = re.exec(text))) {
    if (m[0] === '') { re.lastIndex++; continue; }
    out += esc(text.slice(last, m.index));
    if (lang === 'js') {
      if (m[1]) out += wrap('tk-com', m[1]);
      else if (m[2]) out += wrap('tk-str', m[2]);
      else if (m[3]) out += wrap('tk-kw', m[3]);
      else if (m[4]) out += wrap('tk-num', m[4]);
      else if (m[5]) out += wrap('tk-fn', m[5]);
    } else {
      if (m[1]) out += wrap('tk-com', m[1]);
      else if (m[2]) out += wrap('tk-str', m[2]);
      else if (m[3]) out += wrap('tk-punct', m[3]) + (m[4] ? wrap('tk-tag', m[4]) : '');
      else if (m[5]) out += wrap('tk-punct', m[5]);
      else if (m[6]) out += wrap('tk-attr', m[6]);
    }
    last = re.lastIndex;
  }
  return out + esc(text.slice(last));
}

function hlCss(text) {
  const wrap = (cls, s) => `<span class="${cls}">${esc(s)}</span>`;
  RE_CSS.lastIndex = 0;
  let out = '';
  let last = 0;
  let m;
  while ((m = RE_CSS.exec(text))) {
    out += esc(text.slice(last, m.index));
    if (m[1]) out += wrap('tk-com', m[1]);
    else if (m[2]) out += wrap('tk-tag', m[2]);
    else if (m[3]) out += wrap('tk-attr', m[3]);
    else if (m[4]) out += wrap('tk-num', m[4]);
    last = RE_CSS.lastIndex;
  }
  return out + esc(text.slice(last));
}

/* =========================================================================
 * Interfaz
 * ========================================================================= */

const $ = (s) => document.querySelector(s);
const codeEl = $('#code');
const frame = $('#preview');
const consoleOut = $('#consoleOut');
const feedbackEl = $('#feedback');
const hintBox = $('#hintBox');
const acEl = $('#ac');

function renderMap() {
  let html = '';
  let mod = '';
  LEVELS.forEach((lv, i) => {
    if (lv.module !== mod) {
      mod = lv.module;
      html += `<h3 class="mod">${MODULES[mod].name}</h3>`;
    }
    const stars = progress.completed[i];
    const locked = !isUnlocked(i);
    const cls = ['lv', i === cur && 'active', stars != null && 'done', locked && 'locked'].filter(Boolean).join(' ');
    html += `
      <button class="${cls}" data-i="${i}" ${locked ? 'disabled title="Completa el nivel anterior"' : ''}>
        <span class="num">${locked ? '🔒' : i + 1}</span>
        <span class="lv-txt">
          <span class="lv-title">${esc(lv.title)}</span>
          <span class="stars">${stars != null ? '★'.repeat(stars) + '☆'.repeat(3 - stars) : ''}</span>
        </span>
      </button>`;
  });
  $('#levelMap').innerHTML = html;
  $('#levelMap .lv.active')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });

  const done = Object.keys(progress.completed).length;
  $('#progressFill').style.width = `${(done / LEVELS.length) * 100}%`;
  $('#progressText').textContent = `${done}/${LEVELS.length}`;
}

function goTo(i) {
  if (!isUnlocked(i)) return;
  cur = i;
  progress.current = i;
  const lv = LEVELS[i];

  // Si el nivel ya se completó, rellena sus respuestas.
  if (progress.completed[i] != null) {
    lv.blanks.forEach((b) => { progress.drafts[b.id] = b.answer; });
  }
  saveProgress();

  const badge = $('#lvBadge');
  badge.textContent = `Nivel ${i + 1} · ${MODULES[lv.module].badge}`;
  badge.className = `badge ${MODULES[lv.module].cls}`;
  $('#lvTitle').textContent = lv.title;
  $('#lvConcept').innerHTML = lv.concept;
  $('#lvGoal').textContent = lv.goal;
  hintBox.classList.add('hidden');
  if (flagsOf(i).hint) showHintText();
  setFeedback('');
  hideAC();

  renderMap();
  renderCode();
  runPreview();
}

function renderCode() {
  lines = assemble(cur);
  codeEl.innerHTML = lines.map((l, i) => {
    const body = l.segs.map((s) => {
      if (s.t === 'text') return hl(s.v, l.lang);
      if (s.level < cur) return `<span class="filled" title="Lo escribiste en el nivel ${s.level + 1}">${esc(s.answer)}</span>`;
      return `<input class="blank" data-id="${s.id}" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Espacio por completar">`;
    }).join('');
    return `<div class="line${l.level === cur ? ' new' : ''}"><span class="ln">${i + 1}</span><span class="src">${esc(l.indent)}${body}</span></div>`;
  }).join('');

  inputs = {};
  codeEl.querySelectorAll('.blank').forEach((inp) => {
    const b = BLANKS[inp.dataset.id];
    inputs[b.id] = inp;
    inp.value = progress.drafts[b.id] ?? '';
    sizeInput(inp, b);
    if (progress.completed[cur] != null) inp.classList.add('ok');
  });

  const firstEmpty = [...codeEl.querySelectorAll('.blank')].find((x) => !x.value);
  firstEmpty?.focus({ preventScroll: true });
}

function sizeInput(inp, b) {
  inp.style.width = `${Math.max(b.answer.length, inp.value.length, 2) + 1.2}ch`;
}

function setFeedback(text, kind = '') {
  feedbackEl.textContent = text;
  feedbackEl.className = `feedback ${kind}`;
}

/* ---------------------------- Vista previa ---------------------------- */

let runId = 0;
let previewTimer = null;

function currentSource() {
  return buildSource(lines, valueOf);
}

function runPreview() {
  clearTimeout(previewTimer);
  runId++;
  consoleOut.innerHTML = '<div class="empty">La consola está vacía.</div>';
  // Puente de una sola línea para no alterar los números de línea de los errores.
  const bridge = `<script>(function(){var R=${runId};function f(a){if(typeof a==='string')return a;try{return JSON.stringify(a)}catch(e){return String(a)}}['log','info','warn','error'].forEach(function(m){var o=console[m];console[m]=function(){var a=[].slice.call(arguments);parent.postMessage({cq:R,type:m,text:a.map(f).join(' ')},'*');o.apply(console,a)}});addEventListener('error',function(e){parent.postMessage({cq:R,type:'error',text:e.message+(e.lineno?' (línea '+e.lineno+')':'')},'*')});})();<\/script>`;
  let src = currentSource();
  const head = src.match(/<head[^>]*>/i);
  src = head ? src.replace(head[0], head[0] + bridge) : bridge + src;
  frame.srcdoc = src;
}

function schedulePreview() {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(runPreview, 400);
}

window.addEventListener('message', (e) => {
  if (e.source !== frame.contentWindow || !e.data || e.data.cq !== runId) return;
  consoleOut.querySelector('.empty')?.remove();
  const div = document.createElement('div');
  div.className = `entry ${e.data.type}`;
  div.textContent = e.data.text;
  consoleOut.appendChild(div);
  consoleOut.scrollTop = consoleOut.scrollHeight;
});

/* ---------------------------- Autocompletado ---------------------------- */

const ac = { input: null, items: [], idx: 0 };

function showAC(inp, force = false) {
  const b = BLANKS[inp.dataset.id];
  const q = inp.value.trim().toLowerCase();
  if (!q && !force) return hideAC();
  const pool = POOL_LIST[b.lang];
  let items = pool.filter((w) => w.toLowerCase().startsWith(q) && w !== inp.value.trim());
  if (force && !q) items = pool.slice();
  items.sort((x, y) => x.length - y.length || x.localeCompare(y));
  items = items.slice(0, 7);
  if (!items.length) return hideAC();

  ac.input = inp;
  ac.items = items;
  ac.idx = 0;
  acEl.innerHTML = items.map((w, i) => {
    const typed = w.slice(0, q.length);
    const rest = w.slice(q.length);
    const desc = DESCRIPTIONS[w] ? `<small>${DESCRIPTIONS[w]}</small>` : '';
    return `<div class="ac-item${i === 0 ? ' active' : ''}" data-i="${i}" role="option"><span><b>${esc(typed)}</b>${esc(rest)}</span>${desc}</div>`;
  }).join('') + '<div class="ac-foot">Tab ↹ completar · Esc cerrar</div>';
  const r = inp.getBoundingClientRect();
  acEl.style.left = `${Math.min(r.left, window.innerWidth - 240)}px`;
  acEl.style.top = `${r.bottom + 4}px`;
  acEl.classList.remove('hidden');
}

function hideAC() {
  acEl.classList.add('hidden');
  ac.input = null;
}

function moveAC(delta) {
  ac.idx = (ac.idx + delta + ac.items.length) % ac.items.length;
  acEl.querySelectorAll('.ac-item').forEach((el, i) => el.classList.toggle('active', i === ac.idx));
}

function acceptAC(i = ac.idx) {
  const inp = ac.input;
  if (!inp) return;
  inp.value = ac.items[i];
  onBlankInput(inp);
  hideAC();
  focusNextBlank(inp);
}

function focusNextBlank(inp) {
  const all = [...codeEl.querySelectorAll('.blank')];
  const next = all.slice(all.indexOf(inp) + 1).find((x) => !x.classList.contains('ok'));
  if (next) next.focus();
}

acEl.addEventListener('mousedown', (e) => {
  const item = e.target.closest('.ac-item');
  if (!item) return;
  e.preventDefault();
  acceptAC(Number(item.dataset.i));
});

/* ---------------------------- Eventos del editor ---------------------------- */

function onBlankInput(inp) {
  const b = BLANKS[inp.dataset.id];
  progress.drafts[b.id] = inp.value;
  inp.classList.remove('ok', 'bad');
  sizeInput(inp, b);
  saveProgress();
  schedulePreview();
}

codeEl.addEventListener('input', (e) => {
  if (!e.target.classList.contains('blank')) return;
  onBlankInput(e.target);
  showAC(e.target);
});

codeEl.addEventListener('keydown', (e) => {
  const inp = e.target;
  if (!inp.classList.contains('blank')) return;
  const open = ac.input === inp && !acEl.classList.contains('hidden');

  if (e.key === ' ' && e.ctrlKey) { e.preventDefault(); showAC(inp, true); return; }
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); hideAC(); check(); return; }
  if (open) {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveAC(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); moveAC(-1); return; }
    if (e.key === 'Tab' || e.key === 'Enter') { e.preventDefault(); acceptAC(); return; }
    if (e.key === 'Escape') { hideAC(); return; }
  }
  if (e.key === 'Enter') { e.preventDefault(); check(); }
});

codeEl.addEventListener('focusout', () => setTimeout(() => {
  if (!acEl.contains(document.activeElement) && document.activeElement !== ac.input) hideAC();
}, 120));
codeEl.addEventListener('scroll', hideAC);
window.addEventListener('resize', hideAC);
document.querySelector('.workspace').addEventListener('scroll', hideAC);

/* ---------------------------- Acciones ---------------------------- */

function check() {
  const lv = LEVELS[cur];
  let ok = 0;
  lv.blanks.forEach((b) => {
    const inp = inputs[b.id];
    const good = b.accept.includes((inp.value || '').trim());
    inp.classList.toggle('ok', good);
    inp.classList.toggle('bad', !good);
    if (good) ok++;
    else {
      inp.classList.remove('shake');
      void inp.offsetWidth;
      inp.classList.add('shake');
    }
  });

  if (ok === lv.blanks.length) {
    completeLevel();
  } else {
    const missing = lv.blanks.length - ok;
    setFeedback(`${ok}/${lv.blanks.length} correctos · revisa ${missing === 1 ? 'el espacio marcado' : `los ${missing} espacios marcados`} en rojo.`, 'warn');
    codeEl.querySelector('.blank.bad')?.focus();
  }
}

function completeLevel() {
  const f = flagsOf(cur);
  const stars = f.solved ? 1 : f.hint ? 2 : 3;
  const prev = progress.completed[cur];
  progress.completed[cur] = Math.max(prev ?? 0, stars);
  saveProgress();
  renderMap();
  setFeedback('¡Correcto! 🎉', 'ok');
  runPreview();

  const last = cur === LEVELS.length - 1;
  const starHtml = '★'.repeat(stars) + `<span class="off">${'★'.repeat(3 - stars)}</span>`;
  const msg = stars === 3 ? '¡Perfecto, sin ayudas!' : stars === 2 ? 'Bien hecho (usaste pistas).' : 'Completado viendo la solución. ¡Inténtalo de nuevo cuando quieras!';

  if (last) {
    openModal(`
      <div style="font-size:48px">🏆</div>
      <div class="modal-stars">${starHtml}</div>
      <h2>¡Curso completado!</h2>
      <p>${LEVELS[cur].done}</p>
      <p>Construiste línea por línea una app de tareas con HTML, CSS y JavaScript. Descarga tu código y ábrelo en el navegador.</p>
      <div class="modal-actions">
        <button class="ghost" data-act="close">Seguir aquí</button>
        <button class="primary" data-act="download">⬇ Descargar index.html</button>
      </div>`);
  } else {
    openModal(`
      <div class="modal-stars">${starHtml}</div>
      <h2>¡Nivel ${cur + 1} superado!</h2>
      <p>${msg}</p>
      <p>✅ ${LEVELS[cur].done}</p>
      <div class="modal-actions">
        <button class="ghost" data-act="close">Ver resultado</button>
        <button class="primary" data-act="next">Siguiente: ${esc(LEVELS[cur + 1].title)} →</button>
      </div>`);
  }
}

function showHintText() {
  hintBox.innerHTML = `💡 <strong>Pista:</strong> ${LEVELS[cur].hint}`;
  hintBox.classList.remove('hidden');
}

function hint() {
  flagsOf(cur).hint = true;
  saveProgress();
  showHintText();

  // Revela la siguiente letra del espacio enfocado (o del primero incorrecto).
  const blanks = LEVELS[cur].blanks;
  const focused = document.activeElement?.classList.contains('blank') ? BLANKS[document.activeElement.dataset.id] : null;
  const target = (focused && !focused.accept.includes(inputs[focused.id].value.trim()) && focused)
    || blanks.find((b) => !b.accept.includes(inputs[b.id].value.trim()));
  if (!target) return setFeedback('Todo parece correcto: pulsa Comprobar.', 'ok');

  const inp = inputs[target.id];
  const v = inp.value;
  let k = 0;
  while (k < v.length && v[k] === target.answer[k]) k++;
  inp.value = target.answer.slice(0, k + 1);
  onBlankInput(inp);
  inp.focus();
  inp.setSelectionRange(inp.value.length, inp.value.length);
  setFeedback(inp.value === target.answer ? 'Pista: ese espacio ya está completo.' : 'Pista: se reveló una letra más.', 'warn');
}

function solve() {
  flagsOf(cur).solved = true;
  LEVELS[cur].blanks.forEach((b) => {
    inputs[b.id].value = b.answer;
    onBlankInput(inputs[b.id]);
  });
  setFeedback('Solución mostrada. Léela con calma y pulsa Comprobar para continuar.', 'warn');
}

function clearLevel() {
  LEVELS[cur].blanks.forEach((b) => {
    inputs[b.id].value = '';
    onBlankInput(inputs[b.id]);
  });
  setFeedback('');
  codeEl.querySelector('.blank')?.focus();
}

function download() {
  const upto = Math.min(LEVELS.length - 1, Object.keys(progress.completed).length);
  const all = assemble(Math.max(cur, upto));
  const src = buildSource(all, (b) => (progress.completed[b.level] != null ? b.answer : (progress.drafts[b.id] ?? '')));
  const blob = new Blob([src + '\n'], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'index.html';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ---------------------------- Modal ---------------------------- */

function openModal(html) {
  $('#modalCard').innerHTML = html;
  $('#modal').classList.remove('hidden');
  $('#modalCard .primary')?.focus();
}

function closeModal() {
  $('#modal').classList.add('hidden');
}

$('#modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') return closeModal();
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (act === 'close') closeModal();
  if (act === 'next') { closeModal(); goTo(cur + 1); }
  if (act === 'download') download();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('#modal').classList.contains('hidden')) closeModal();
});

/* ---------------------------- Botones ---------------------------- */

$('#levelMap').addEventListener('click', (e) => {
  const btn = e.target.closest('.lv');
  if (btn && !btn.disabled) goTo(Number(btn.dataset.i));
});
$('#btnCheck').addEventListener('click', check);
$('#btnHint').addEventListener('click', hint);
$('#btnSolve').addEventListener('click', solve);
$('#btnClear').addEventListener('click', clearLevel);
$('#btnRun').addEventListener('click', runPreview);
$('#btnDownload').addEventListener('click', download);
$('#btnClearConsole').addEventListener('click', () => {
  consoleOut.innerHTML = '<div class="empty">La consola está vacía.</div>';
});

// Reiniciar pide doble clic para evitar accidentes (sin diálogos del navegador).
let resetArmed = null;
$('#btnReset').addEventListener('click', (e) => {
  const btn = e.currentTarget;
  if (!resetArmed) {
    btn.textContent = '¿Seguro? Clic otra vez';
    resetArmed = setTimeout(() => { btn.textContent = 'Reiniciar curso'; resetArmed = null; }, 3000);
    return;
  }
  clearTimeout(resetArmed);
  resetArmed = null;
  btn.textContent = 'Reiniciar curso';
  progress = freshProgress();
  try { localStorage.removeItem('tareas'); } catch { /* nada */ }
  saveProgress();
  goTo(0);
});

/* ---------------------------- Inicio ---------------------------- */

goTo(isUnlocked(progress.current) ? progress.current : 0);
