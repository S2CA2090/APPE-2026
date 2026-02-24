// curriculum.js — Contenido curricular por materia
// Usado por la pantalla "subjects" para mostrar las temáticas semanales

const CURRICULUM_DB = {

    // ─────────────────────────────────────────────
    //  CÁTEDRA DE LA PAZ — Grados 101-112
    // ─────────────────────────────────────────────
    catedra: {
        id: 'catedra',
        name: 'Cátedra de la Paz',
        shortName: 'CÁTEDRA DE LA PAZ',
        grades: '101-112',
        icon: 'handshake',
        color: '#25f447',
        totalWeeks: 37,
        totalUnits: 10,
        weeks: [
            {
                range: '1-2', dates: 'Ene 27 – Feb 06',
                objetivo: 'Identificar y explicar la importancia de la convivencia pacífica y la participación democrática en la institución educativa, mediante el reconocimiento del gobierno escolar y el manual de convivencia.',
                temas: [
                    { nombre: 'Cultura de paz y convivencia armónica', texto: 'La cultura de paz es un conjunto de valores, actitudes y comportamientos que rechazan la violencia y promueven el diálogo para resolver los conflictos. En la institución educativa, vivir en convivencia armónica significa respetar las diferencias de cada compañero, escuchar antes de juzgar y construir juntos un ambiente donde todos se sientan seguros y valorados. La paz no es solo la ausencia de guerra, es la presencia activa del respeto y la solidaridad en cada interacción diaria.' },
                    { nombre: 'Manual de convivencia', texto: 'El manual de convivencia es el documento que regula la vida escolar y establece los derechos y deberes de todos los miembros de la comunidad educativa. En él se definen las normas, los procesos de mediación y las acciones formativas ante situaciones que afecten la convivencia. Conocerlo y aplicarlo es responsabilidad de estudiantes, docentes, directivos y familias. Es una herramienta de construcción colectiva de paz, no simplemente un reglamento.' },
                    { nombre: 'Gobierno escolar', texto: 'El gobierno escolar es la estructura democrática del colegio. Está integrado por el rector, el consejo directivo, el consejo académico, el personero estudiantil, el consejo de estudiantes, el consejo de padres, entre otros. Cada uno cumple un rol fundamental en la toma de decisiones. Participar en el gobierno escolar es ejercer la ciudadanía desde la edad escolar: aprendes a proponer, a votar, a debatir y a transformar tu entorno.' },
                    { nombre: 'DBA: Participación democrática', texto: 'Los Derechos Básicos de Aprendizaje relacionados con la participación democrática buscan que los estudiantes comprendan que la democracia es un estilo de vida que se practica cotidianamente. Participar democráticamente implica elegir y ser elegido, respetar las decisiones colectivas, defender los derechos de todos y asumir responsabilidades cívicas. La democracia se vive en el aula, en el colegio, en la familia y en la comunidad.' },
                    { nombre: 'PPT: Educación para la ciudadanía', texto: 'Los Proyectos Pedagógicos Transversales de Educación para la Ciudadanía buscan formar personas capaces de vivir en comunidad con respeto, justicia y compromiso. Esto incluye aprender a reconocer y ejercer los derechos humanos, a participar activamente en la vida democrática, a resolver conflictos pacíficamente y a construir una sociedad más equitativa e incluyente desde el ámbito escolar.' }
                ],
                desempenos: { superior: 'Analiza y propone acciones para fortalecer la convivencia y la democracia escolar.', alto: 'Explica el funcionamiento del gobierno escolar y participa activamente.', basico: 'Reconoce normas y órganos del gobierno escolar.', bajo: 'Presenta dificultad para identificar normas y espacios de participación.' },
                indicadores: ['Participa activamente en actividades democráticas', 'Explica funciones del gobierno escolar', 'Reconoce normas de convivencia'],
                actividades: ['Conversatorio sobre convivencia', 'Explicación del gobierno escolar', 'Crucigrama temático', 'Elección del gobierno escolar', 'Autoevaluación formativa'],
                evaluacion: ['Observación directa', 'Evaluación formativa', 'Lista de chequeo']
            },
            {
                range: '3-6', dates: 'Feb 09-20',
                objetivo: 'Analizar la diversidad cultural y étnica como un valor fundamental para la convivencia pacífica y la construcción de paz.',
                temas: [
                    { nombre: 'Diversidad y multiculturalidad', texto: 'Colombia es uno de los países más diversos del mundo. Tiene más de 100 grupos étnicos indígenas, comunidades afrocolombianas, raizales, palenqueras y el pueblo ROM (gitano), además de comunidades mestizas y campesinas con identidades propias. Esta riqueza cultural se expresa en lenguas, tradiciones, gastronomías, músicas y saberes ancestrales. La multiculturalidad no es un obstáculo para la convivencia, sino su mayor fortaleza: aprender del otro nos hace más humanos.' },
                    { nombre: 'Art. 7 y 8 Constitución Política', texto: 'El artículo 7 de la Constitución Política de Colombia establece que "el Estado reconoce y protege la diversidad étnica y cultural de la Nación colombiana". El artículo 8 señala que "es obligación del Estado y de las personas proteger las riquezas culturales y naturales de la Nación". Estos artículos son la base legal para la protección de las comunidades étnicas, sus territorios, tradiciones y formas de vida. Conocer la Constitución es el primer paso para defenderla.' },
                    { nombre: 'Cátedra afrocolombiana', texto: 'La Cátedra de Estudios Afrocolombianos, establecida por la Ley 70 de 1993 y el Decreto 1122 de 1998, busca visibilizar los aportes históricos, culturales y sociales de las comunidades afrocolombianas a la construcción de la nación. Los africanos llegaron a América siendo esclavizados, pero resistieron y aportaron profundamente a la música, la gastronomía, el lenguaje y la espiritualidad colombiana. Reconocer su historia es un acto de justicia y de paz.' },
                    { nombre: 'DBA: Reconocimiento de la diversidad', texto: 'El DBA sobre reconocimiento de la diversidad plantea que los estudiantes deben comprender que las diferencias culturales, étnicas, religiosas y de género son características que enriquecen a las sociedades. Reconocer la diversidad significa no discriminar, incluir activamente a quienes son diferentes y valorar lo que cada persona aporta desde su identidad. La indiferencia y el silencio ante la discriminación también son formas de violencia.' }
                ],
                desempenos: { superior: 'Argumenta críticamente la importancia de la diversidad cultural.', alto: 'Explica la diversidad como riqueza social.', basico: 'Identifica características culturales.', bajo: 'Reconoce de manera limitada la diversidad.' },
                indicadores: ['Describe características culturales propias y de otros', 'Reconoce situaciones de discriminación', 'Participa en actividades de reflexión'],
                actividades: ['Pregunta problematizadora', 'Análisis de conceptos', 'Collage de identidad', 'Propuesta Día Afrocolombianidad', 'Socialización y retroalimentación'],
                evaluacion: ['Rúbrica', 'Observación', 'Evaluación formativa']
            },
            {
                range: '7-8', dates: 'Feb 23 – Mar 06',
                objetivo: 'Analizar hechos relevantes del conflicto armado colombiano para comprender su impacto social y la importancia de la memoria histórica.',
                temas: [
                    { nombre: 'Memoria histórica', texto: 'La memoria histórica es el proceso colectivo de recordar, documentar y transmitir los hechos del pasado para que no se repitan. En Colombia, el Centro Nacional de Memoria Histórica ha documentado más de 220.000 víctimas del conflicto armado. Recordar no es sufrir el pasado indefinidamente: es aprender de él para construir un futuro diferente. La memoria es un acto político y ético de dignificación de las víctimas.' },
                    { nombre: 'Conflicto armado colombiano', texto: 'El conflicto armado en Colombia tiene raíces en la inequidad social, el acceso desigual a la tierra y la exclusión política. Se ha prolongado por más de 60 años e involucró a grupos guerrilleros, paramilitares, narcotráfico y fuerzas del Estado. Sus consecuencias incluyen el desplazamiento de millones de personas, masacres, desapariciones forzadas y el reclutamiento de menores. El Acuerdo de Paz de 2016 con las FARC-EP fue un hito histórico hacia la reconciliación, aunque el conflicto continúa con otros actores.' },
                    { nombre: 'DBA: Análisis histórico', texto: 'El DBA de análisis histórico busca que los estudiantes desarrollen la capacidad de leer el pasado críticamente: identificar causas y consecuencias, reconocer múltiples perspectivas, comparar fuentes de información y relacionar los hechos históricos con el presente. Analizar la historia no significa repetir fechas y nombres, sino comprender por qué ocurrieron las cosas y qué responsabilidades tenemos hoy como ciudadanos para no repetir los errores del pasado.' }
                ],
                desempenos: { superior: 'Relaciona memoria histórica con reconciliación y no repetición.', alto: 'Analiza causas y consecuencias del conflicto.', basico: 'Describe hechos históricos.', bajo: 'Reconoce hechos de forma superficial.' },
                indicadores: ['Explica hechos del conflicto', 'Relaciona pasado y presente', 'Participa en reflexiones'],
                actividades: ['Lluvia de ideas', 'Línea de tiempo', 'Análisis de testimonios', 'Conversatorio', 'Reflexión escrita'],
                evaluacion: ['Lista de chequeo', 'Evaluación formativa']
            },
            {
                range: '9-10', dates: 'Mar 09-20',
                objetivo: 'Aplicar estrategias de resolución pacífica de conflictos en situaciones escolares cotidianas.',
                temas: [
                    { nombre: 'Resolución pacífica de conflictos', texto: 'Un conflicto es una situación de desacuerdo o tensión entre dos o más personas con intereses diferentes. El conflicto en sí mismo no es negativo; lo que importa es cómo se aborda. La resolución pacífica implica reconocer el problema, escuchar activamente al otro, expresar los sentimientos sin agredir, buscar soluciones que beneficien a todos y llegar a acuerdos. Habilidades como la empatía, la asertividad y la negociación son fundamentales para construir paz desde los espacios cotidianos.' },
                    { nombre: 'Mediación escolar', texto: 'La mediación escolar es un proceso voluntario y confidencial en el que una persona imparcial (el mediador) ayuda a dos partes en conflicto a dialogar y encontrar una solución satisfactoria para ambas. El mediador no decide ni impone; facilita la comunicación. En los colegios, los mediadores pueden ser compañeros capacitados, docentes o coordinadores. La mediación reduce la violencia, fortalece las habilidades sociales y empodera a los estudiantes para resolver sus propios conflictos.' }
                ],
                desempenos: { superior: 'Diseña soluciones pacíficas a conflictos reales.', alto: 'Aplica estrategias de diálogo.', basico: 'Reconoce formas de resolver conflictos.', bajo: 'Presenta dificultad para resolver conflictos pacíficamente.' },
                indicadores: ['Propone soluciones pacíficas', 'Usa el diálogo respetuoso'],
                actividades: ['Análisis de situaciones', 'Estrategias de mediación', 'Juego de roles', 'Casos reales', 'Coevaluación'],
                evaluacion: ['Rúbrica', 'Observación']
            },
            {
                range: '11-14', dates: 'Mar 23 – Abr 10',
                objetivo: 'Fomentar la comprensión profunda de los principios fundamentales de la paz, la justicia social y los derechos humanos, promoviendo la reflexión crítica y el diálogo constructivo.',
                temas: [
                    { nombre: 'Principios Fundamentales de la Paz', texto: 'Los principios fundamentales de la paz incluyen la justicia, la equidad, la solidaridad, el respeto por los derechos humanos y la no violencia. La paz genuina no se construye únicamente ausencia de conflictos armados, sino con la garantía de condiciones de vida dignas para todas las personas. Una sociedad en paz es aquella que distribuye equitativamente sus recursos, garantiza el acceso a la educación, la salud y la justicia, y respeta la diversidad sin discriminación.' },
                    { nombre: 'Justicia, equidad y solidaridad', texto: 'La justicia implica que cada persona reciba lo que le corresponde según sus derechos y necesidades. La equidad va más allá de la igualdad formal: reconoce que algunas personas necesitan más apoyo que otras para alcanzar las mismas oportunidades. La solidaridad es la capacidad de sentir como propios los problemas ajenos y actuar para ayudar. Estos tres valores son pilares de una sociedad pacífica y son practicables desde el aula: cuando apoyas a un compañero, cuando defiendes a quien es maltratado, construyes paz.' },
                    { nombre: 'Empatía y comprensión intercultural', texto: 'La empatía es la capacidad de ponernos en el lugar del otro, de comprender sus sentimientos y perspectivas sin necesariamente compartirlas. En contextos culturalmente diversos como Colombia, la empatía intercultural nos permite tender puentes entre comunidades con historias, valores y cosmovisiones diferentes. Desarrollar empatía no significa eliminar las diferencias, sino aprender a convivir con ellas desde el respeto genuino y la curiosidad por el otro.' },
                    { nombre: 'Prácticas inclusivas y respeto', texto: 'Las prácticas inclusivas son acciones concretas que garantizan que todas las personas, independientemente de sus características individuales, puedan participar plenamente en la vida escolar y social. Incluir significa adaptar el entorno a las necesidades de las personas, no exigir que las personas se adapten a un entorno diseñado solo para algunos. En el colegio, la inclusión se practica cuando integramos a quien tiene discapacidades, cuando respetamos las identidades de género, cuando escuchamos voces que usualmente son ignoradas.' }
                ],
                desempenos: { superior: 'Reconoce y valora la diversidad cultural, étnica, religiosa y de género.', alto: 'Comprende y define el concepto de armonía y su relación con la convivencia.', basico: 'Identifica elementos que conforman la armonía en diversos contextos.', bajo: 'Reflexiona sobre experiencias personales relacionadas con la armonía.' },
                indicadores: ['Reconoce y valora la diversidad', 'Identifica elementos de armonía', 'Reflexiona sobre experiencias personales'],
                actividades: ['Exposiciones', 'Análisis de casos'],
                evaluacion: ['Trabajo colaborativo', 'Lista de chequeo']
            },
            {
                range: '15-18', dates: 'Abr 13-24',
                objetivo: 'Desarrollar habilidades de resolución de conflictos y mediación, y sensibilizar sobre la diversidad cultural como pilar para una sociedad pacífica.',
                temas: [
                    { nombre: 'Prevención y resolución de conflictos', texto: 'Prevenir un conflicto no significa evitarlo o ignorarlo, sino anticiparse a sus causas y crear condiciones para que no escale a la violencia. La prevención incluye el fortalecimiento de habilidades sociales y emocionales: el autocontrol, la escucha activa, la comunicación asertiva y la gestión de emociones. Cuando logramos identificar tempranamente las tensiones y actuamos con responsabilidad, evitamos que pequeños malentendidos se conviertan en grandes rupturas.' },
                    { nombre: 'Estrategias de mediación y diálogo', texto: 'El diálogo genuino es mucho más que hablar: es escuchar con disposición a cambiar de opinión, a comprender al otro y a construir juntos una realidad diferente. Las estrategias de mediación incluyen la escucha activa (repetir con propias palabras lo que el otro dijo), el uso de mensajes en primera persona ("yo siento que..."), la búsqueda de intereses comunes y la propuesta de compromisos verificables. Un buen mediador sabe hacer preguntas que abran posibilidades, no que cierren posiciones.' },
                    { nombre: 'Diversidad cultural e inclusión', texto: 'La diversidad cultural en el aula es una oportunidad pedagógica invaluable. Cuando en un salón conviven estudiantes de diferentes regiones, etnias, religiones o condiciones socioeconómicas, se crea un espacio para aprender sobre el mundo real. La inclusión cultural implica que los currículos, las didácticas y los materiales reconozcan y celebren esa diversidad, en lugar de imponer una única forma de ser, pensar y vivir. Una educación inclusiva prepara para un mundo diverso y cambiante.' }
                ],
                desempenos: { superior: 'Relaciona la importancia de la armonía con situaciones sociales a nivel local, nacional e internacional.', alto: 'Aplica estrategias de mediación en situaciones cotidianas.', basico: 'Identifica formas de prevención de conflictos.', bajo: 'Reconoce la importancia del diálogo.' },
                indicadores: ['Relaciona armonía con problemáticas sociales', 'Aplica estrategias de mediación', 'Reflexiona sobre ética personal y colectiva'],
                actividades: ['Exposiciones', 'Análisis de casos'],
                evaluacion: ['Trabajo colaborativo', 'Lista de chequeo']
            },
            {
                range: '19-23', dates: 'Abr 27 – May 08',
                objetivo: 'Incentivar la participación activa en proyectos comunitarios que promuevan la paz y el bienestar social, fomentando el compromiso cívico.',
                temas: [
                    { nombre: 'Compromiso cívico y participación ciudadana', texto: 'El compromiso cívico es la responsabilidad activa que asumimos como miembros de una comunidad. Va más allá de votar cada cuatro años: incluye informarnos sobre los asuntos públicos, participar en organizaciones comunitarias, defender los derechos de quienes son vulnerados y proponer soluciones a los problemas colectivos. Los jóvenes tienen un rol crucial en la transformación de sus comunidades porque son quienes vivirán las consecuencias de las decisiones que se toman hoy.' },
                    { nombre: 'Responsabilidad social', texto: 'La responsabilidad social es la conciencia de que nuestras acciones individuales tienen impacto en los demás y en el entorno. Ser socialmente responsable implica pensar antes de actuar en cómo afectan nuestras decisiones a los otros, al medio ambiente y a las generaciones futuras. En el colegio, la responsabilidad social se practica cuando cumplimos nuestros compromisos académicos, cuando cuidamos los espacios comunes, cuando actuamos con honestidad y cuando apoyamos a quienes lo necesitan.' },
                    { nombre: 'Participación en toma de decisiones', texto: 'Participar en la toma de decisiones colectivas es un derecho y una responsabilidad ciudadana. En el colegio, los estudiantes pueden participar a través del gobierno escolar, los comités de convivencia, las asambleas de curso y los proyectos pedagógicos. Para participar efectivamente, se necesita informarse, escuchar distintas perspectivas, argumentar con respeto y aceptar democráticamente las decisiones colectivas. La participación transforma a los estudiantes en protagonistas de su propia educación.' }
                ],
                desempenos: { superior: 'Analiza cómo la armonía influye en la calidad de las relaciones interpersonales.', alto: 'Diseña propuestas de participación cívica.', basico: 'Identifica acciones de bienestar social.', bajo: 'Reconoce la importancia de la participación.' },
                indicadores: ['Analiza influencia de la armonía en relaciones', 'Comprende estrategias no violentas', 'Propone acciones comunitarias'],
                actividades: ['Exposiciones', 'Análisis de casos'],
                evaluacion: ['Trabajo colaborativo', 'Lista de chequeo']
            },
            {
                range: '24-28', dates: 'May 11-22',
                objetivo: 'Incentivar la participación activa en proyectos comunitarios, analizando ejemplos concretos donde la armonía ha generado impactos positivos.',
                temas: [
                    { nombre: 'Compromiso cívico y participación ciudadana', texto: 'A nivel local y nacional existen múltiples experiencias exitosas de participación ciudadana que han transformado comunidades. Organizaciones como las Juntas de Acción Comunal, los Consejos de Juventud, los Cabildos Indígenas y los Consejos Comunitarios Afrocolombianos son espacios donde la ciudadanía organizada incide en las decisiones que afectan su territorio. Conocer estas experiencias inspira a los jóvenes a creer que su participación sí puede cambiar las cosas.' },
                    { nombre: 'Impacto de la armonía en comunidades', texto: 'Hay comunidades en Colombia y el mundo donde la práctica sostenida de valores de paz y cooperación ha generado transformaciones sociales profundas. El caso de Samaniego (Nariño), que construyó acuerdos de convivencia entre comunidades afectadas por el conflicto, o el de los laboratorios de paz del Magdalena Medio, demuestran que cuando una comunidad decide apostar por el diálogo, la armonía y la cooperación, puede superar incluso las situaciones más adversas. La paz es posible cuando es colectiva.' }
                ],
                desempenos: { superior: 'Desarrolla argumentos sólidos sobre el aporte de la armonía a la convivencia.', alto: 'Analiza ejemplos concretos de impacto positivo.', basico: 'Identifica casos de participación comunitaria.', bajo: 'Reconoce la importancia del compromiso cívico.' },
                indicadores: ['Analiza ejemplos concretos de armonía', 'Desarrolla argumentos sobre convivencia'],
                actividades: ['Exposiciones', 'Análisis de casos'],
                evaluacion: ['Trabajo colaborativo', 'Lista de chequeo']
            },
            {
                range: '29-33', dates: 'May 25 – Jun 05',
                objetivo: 'Facilitar el conocimiento de casos y experiencias exitosas de construcción de paz a nivel local, nacional e internacional, inspirando a ser agentes de cambio.',
                temas: [
                    { nombre: 'Responsabilidad social y ciudadana', texto: 'Ser un agente de cambio significar asumir la responsabilidad de contribuir activamente a mejorar el entorno. Los jóvenes que se forman en la ciudadanía activa tienen más herramientas para cuestionar las injusticias, proponer alternativas y movilizar a otros. En Colombia, muchos jóvenes han liderado procesos de paz desde sus comunidades: creando arte para sanar, haciendo periodismo comunitario o creando redes de apoyo para víctimas del conflicto. El cambio empieza por decisión individual y crece con la acción colectiva.' },
                    { nombre: 'Participación en toma de decisiones', texto: 'A nivel nacional, los jóvenes colombianos entre 14 y 28 años están reconocidos por la Ley de Juventud (Ley 1885 de 2018) como sujetos de derechos especiales. Los Consejos de Juventud son espacios formales de participación política juvenil. A nivel internacional, organizaciones como UNICEF y la ONU tienen programas especiales para la participación de jóvenes en la construcción de paz. Participar en estos espacios no solo transforma las comunidades, sino que forma nuevos líderes comprometidos con la democracia.' },
                    { nombre: 'Pensamiento crítico sobre la violencia', texto: 'El pensamiento crítico nos permite cuestionar las narrativas que normalizan o justifican la violencia. Muchas veces la violencia se presenta como natural, inevitable o como la única forma de resolver los conflictos. Desarrollar pensamiento crítico significa preguntarse: ¿quién se beneficia de la violencia? ¿Qué alternativas existen? ¿Qué voces no estamos escuchando? Examinar los discursos de odio, la violencia mediática y los estereotipos que alimentan la discriminación es fundamental para construir una cultura de paz sostenible.' }
                ],
                desempenos: { superior: 'Propone acciones concretas para fomentar la armonía en su entorno.', alto: 'Analiza casos exitosos de construcción de paz.', basico: 'Identifica agentes de cambio en la comunidad.', bajo: 'Reconoce ejemplos de construcción de paz.' },
                indicadores: ['Propone acciones para fomentar la armonía', 'Desarrolla pensamiento crítico sobre la violencia'],
                actividades: ['Exposiciones', 'Análisis de casos'],
                evaluacion: ['Trabajo colaborativo', 'Lista de chequeo']
            },
            {
                range: '34-37', dates: 'Jun 08-19',
                objetivo: 'Integrar la tecnología y los medios de comunicación en la educación para la paz, difundiendo mensajes positivos y construyendo redes de apoyo.',
                temas: [
                    { nombre: 'Memoria histórica y construcción de paz', texto: 'Integrar la tecnología en la memoria histórica permite a las nuevas generaciones acceder a testimonios, documentos y relatos que de otra forma permanecerían olvidados. Plataformas digitales, podcasts, documentales y redes sociales pueden ser poderosas herramientas para difundir la memoria y generar reflexión crítica sobre el pasado. El Centro Nacional de Memoria Histórica cuenta con archivos digitales, exposiciones virtuales y recursos pedagógicos que pueden consultarse libremente para aprender sobre el conflicto y la paz en Colombia.' },
                    { nombre: 'Tecnología y comunicación para la paz', texto: 'La tecnología puede ser un poderoso aliado de la paz cuando se usa con responsabilidad y creatividad. Las redes sociales permiten amplificar voces que antes no tenían espacio, conectar comunidades distantes y organizar acciones colectivas por la justicia y los derechos. Sin embargo, también pueden ser espacios de desinformación, discurso de odio y ciberacoso. Usar la tecnología para la paz implica verificar la información antes de compartirla, promover mensajes que construyan y no destruyan, y crear redes de solidaridad digital.' },
                    { nombre: 'Responsabilidad individual y colectiva', texto: 'La construcción de paz no es solo responsabilidad del gobierno o de las instituciones: es una tarea de cada ciudadano en cada espacio donde vive. Individualmente, podemos practicar el respeto, la empatía y la no violencia en nuestras relaciones diarias. Colectivamente, podemos organizarnos para exigir nuestros derechos, proteger a los más vulnerables y construir comunidades más justas y solidarias. La paz no llega sola: la construimos juntos, un gesto, una decisión, una acción a la vez.' }
                ],
                desempenos: { superior: 'Considera posibles contradicciones en la relación entre armonía y convivencia, presentando argumentos críticos y fundamentados.', alto: 'Conecta la memoria histórica con la responsabilidad en la construcción de paz.', basico: 'Identifica lecciones aprendidas de conflictos históricos.', bajo: 'Reconoce la importancia de la memoria histórica.' },
                indicadores: ['Conecta memoria histórica con un futuro pacífico', 'Analiza contradicciones entre armonía y convivencia'],
                actividades: ['Exposiciones', 'Análisis de casos'],
                evaluacion: ['Trabajo colaborativo', 'Lista de chequeo']
            }
        ]
    },

    // ─────────────────────────────────────────────
    //  CIENCIAS ECONÓMICAS — Grados 101-116
    // ─────────────────────────────────────────────
    ciencias: {
        id: 'ciencias',
        name: 'Ciencias Económicas y Políticas',
        shortName: 'CIENCIAS ECONÓMICAS',
        grades: '101-116',
        icon: 'account_balance',
        color: '#067ff9',
        totalWeeks: 34,
        totalUnits: 34,
        weeks: [
            {
                range: '1', dates: '02â€“06 feb',
                objetivo: 'Reconocer la importancia de la innovaciÃ³n en el desarrollo econÃ³mico y empresarial.',
                temas: [{ nombre: 'TeorÃ­as de la innovaciÃ³n', texto: 'La innovaciÃ³n es el proceso de transformar ideas en productos, servicios o procesos que generan valor econÃ³mico y social. Joseph Schumpeter la llamÃ³ "destrucciÃ³n creativa": las innovaciones destruyen modelos antiguos y crean nuevos negocios. Existen innovaciones de producto (nuevo bien), de proceso (nueva forma de producir), de mercado (nuevo segmento) y de modelo de negocio. Entender la innovaciÃ³n es clave para comprender por quÃ© unas empresas y paÃ­ses prosperan mientras otros quedan rezagados.' }],
                desempenos: { superior: 'Analiza y argumenta el rol de la innovaciÃ³n con criterio econÃ³mico propio.', alto: 'Identifica y explica teorÃ­as bÃ¡sicas de la innovaciÃ³n.', basico: 'Define tipos de innovaciÃ³n con ejemplos.', bajo: 'Tiene dificultad para reconocer la innovaciÃ³n como factor econÃ³mico.' },
                indicadores: ['Define tipos de innovaciÃ³n con ejemplos'], actividades: ['Lectura guiada', 'Lluvia de ideas', 'DiscusiÃ³n grupal'], evaluacion: ['ObservaciÃ³n', 'ParticipaciÃ³n', 'Actividad diagnÃ³stica']
            },

            {
                range: '2', dates: '09â€“13 feb',
                objetivo: 'Comprender el concepto de I+D+i y su impacto en la competitividad empresarial.',
                temas: [{ nombre: 'I+D+i: InvestigaciÃ³n, Desarrollo e InnovaciÃ³n', texto: 'I+D+i es el conjunto de actividades que realiza una empresa u organizaciÃ³n para generar conocimiento nuevo (InvestigaciÃ³n), convertirlo en productos o tÃ©cnicas aplicables (Desarrollo) y llevarlos al mercado (innovaciÃ³n). Las empresas que invierten en I+D+i son mÃ¡s competitivas porque anticipan cambios en el mercado. Colombia invierte aÃºn poco en I+D+i comparado con paÃ­ses de la OCDE, lo que limita su productividad y competitividad internacional.' }],
                desempenos: { superior: 'Relaciona la inversiÃ³n en I+D+i con la competitividad empresarial con argumentos sÃ³lidos.', alto: 'Diferencia investigaciÃ³n, desarrollo e innovaciÃ³n.', basico: 'Clasifica correctamente ejemplos de I+D+i.', bajo: 'Confunde las etapas del proceso I+D+i.' },
                indicadores: ['Clasifica correctamente ejemplos de I+D+i'], actividades: ['Taller aplicado', 'Trabajo en equipo'], evaluacion: ['Taller evaluativo', 'CoevaluaciÃ³n']
            },

            {
                range: '3', dates: '16â€“20 feb',
                objetivo: 'Analizar decisiones productivas bÃ¡sicas en la empresa.',
                temas: [{ nombre: 'DecisiÃ³n de comprar o producir', texto: 'Una decisiÃ³n estratÃ©gica clave en la empresa es si conviene fabricar internamente un componente o comprarlo a un proveedor externo. Esta decisiÃ³n se basa en comparar costos, calidad, tiempo de entrega, capacidad productiva propia y riesgo de dependencia. Cuando una empresa decide externalizar ("outsourcing"), reduce costos fijos pero pierde control. Analizar bien esta decisiÃ³n puede ser determinante para la rentabilidad del negocio.' }],
                desempenos: { superior: 'EvalÃºa alternativas productivas con argumentos econÃ³micos complejos.', alto: 'Analiza alternativas productivas y sus consecuencias.', basico: 'Justifica decisiones con argumentos econÃ³micos bÃ¡sicos.', bajo: 'Tiene dificultad para comparar alternativas productivas.' },
                indicadores: ['Justifica decisiones con argumentos econÃ³micos'], actividades: ['Estudio de caso', 'Debate guiado'], evaluacion: ['RÃºbrica de anÃ¡lisis de caso']
            },

            {
                range: '4', dates: '23â€“27 feb',
                objetivo: 'Comprender el concepto de costos y el punto muerto.',
                temas: [{ nombre: 'Umbral de rentabilidad (punto muerto)', texto: 'El punto muerto o umbral de rentabilidad es el nivel de ventas en el que la empresa ni gana ni pierde: los ingresos son iguales a los costos totales. Para calcularlo se necesita conocer los costos fijos (que no cambian con la producciÃ³n), los costos variables (que sÃ­ cambian) y el precio de venta unitario. Por encima del punto muerto la empresa genera beneficios; por debajo, pÃ©rdidas. Conocer este umbral es esencial para fijar precios, planificar y tomar decisiones de inversiÃ³n.' }],
                desempenos: { superior: 'Calcula e interpreta el punto muerto en casos empresariales complejos.', alto: 'Calcula el punto muerto de una empresa correctamente.', basico: 'Resuelve ejercicios prÃ¡cticos del umbral de rentabilidad.', bajo: 'Tiene dificultad para diferenciar costos fijos y variables.' },
                indicadores: ['Resuelve correctamente ejercicios del umbral de rentabilidad'], actividades: ['Ejercicios en clase', 'Ejemplos guiados'], evaluacion: ['Prueba corta', 'RevisiÃ³n de ejercicios']
            },

            {
                range: '5', dates: '02â€“06 mar',
                objetivo: 'Analizar el ciclo productivo y financiero de la empresa.',
                temas: [{ nombre: 'PerÃ­odo medio de maduraciÃ³n', texto: 'El perÃ­odo medio de maduraciÃ³n es el tiempo que tarda una empresa en recuperar el dinero invertido en su ciclo productivo: desde que compra materias primas hasta que cobra a sus clientes. Se divide en subperÃ­odos: almacenamiento de materias primas, fabricaciÃ³n, almacenamiento de producto terminado y cobro a clientes. Cuanto mÃ¡s corto sea, mejor: la empresa necesita menos capital de trabajo y tiene mayor liquidez. Gestionar bien el ciclo productivo es una ventaja competitiva importante.' }],
                desempenos: { superior: 'Optimiza el perÃ­odo medio de maduraciÃ³n en un caso empresarial real.', alto: 'Calcula el perÃ­odo medio de maduraciÃ³n.', basico: 'Interpreta correctamente los tiempos del ciclo productivo.', bajo: 'Tiene dificultad para identificar las etapas del ciclo productivo.' },
                indicadores: ['Interpreta tiempos del ciclo productivo'], actividades: ['Taller prÃ¡ctico', 'Esquemas del ciclo'], evaluacion: ['ObservaciÃ³n', 'Taller calificado']
            },

            {
                range: '6', dates: '09â€“13 mar',
                objetivo: 'Identificar la estructura econÃ³mica y financiera de la empresa.',
                temas: [{ nombre: 'Masas patrimoniales', texto: 'El patrimonio de una empresa se organiza en masas patrimoniales: el activo (lo que la empresa tiene: bienes y derechos), el pasivo (lo que debe: deudas y obligaciones) y el patrimonio neto (la diferencia entre activo y pasivo, que pertenece a los propietarios). El balance de situaciÃ³n muestra en un momento dado cÃ³mo estÃ¡n distribuidos estos elementos. Analizar las masas patrimoniales permite evaluar la solidez financiera de la empresa y su capacidad para hacer frente a sus compromisos.' }],
                desempenos: { superior: 'Interpreta masas patrimoniales de una empresa real y evalÃºa su situaciÃ³n financiera.', alto: 'Clasifica correctamente activos, pasivos y patrimonio neto.', basico: 'Organiza elementos bÃ¡sicos en masas patrimoniales.', bajo: 'Confunde activos con pasivos.' },
                indicadores: ['Organiza elementos en masas patrimoniales'], actividades: ['Ejercicios de clasificaciÃ³n', 'Trabajo individual'], evaluacion: ['Lista de chequeo', 'Ejercicio escrito']
            },

            {
                range: '7', dates: '16â€“20 mar',
                objetivo: 'Analizar la situaciÃ³n financiera de una empresa.',
                temas: [{ nombre: 'Ratios financieros', texto: 'Los ratios financieros son indicadores que analizan la salud financiera de una empresa comparando cifras de sus estados financieros. Los mÃ¡s importantes son: liquidez (Â¿puede pagar deudas a corto plazo?), endeudamiento (Â¿cuÃ¡nto debe respecto a lo que tiene?) y rentabilidad (Â¿estÃ¡ generando ganancias?). Saber calcularlos e interpretarlos permite diagnosticar problemas antes de que sean graves y tomar decisiones empresariales informadas.' }],
                desempenos: { superior: 'Interpreta y compara ratios financieros de empresas reales proponiendo mejoras.', alto: 'Calcula e interpreta ratios financieros bÃ¡sicos.', basico: 'Interpreta resultados financieros bÃ¡sicos con orientaciÃ³n.', bajo: 'Tiene dificultad para calcular e interpretar ratios.' },
                indicadores: ['Interpreta resultados financieros bÃ¡sicos'], actividades: ['ResoluciÃ³n de ejercicios', 'AnÃ¡lisis guiado'], evaluacion: ['Taller evaluativo']
            },

            {
                range: '8', dates: '23â€“27 mar',
                objetivo: 'Reforzar y consolidar aprendizajes previos.',
                temas: [{ nombre: 'Repaso general â€” Primer perÃ­odo', texto: 'El repaso integra los conceptos del primer perÃ­odo: innovaciÃ³n y I+D+i, decisiÃ³n de comprar o producir, umbral de rentabilidad, perÃ­odo medio de maduraciÃ³n, masas patrimoniales y ratios financieros. Consolidar estos fundamentos empresariales es clave para analizar la realidad econÃ³mica con pensamiento crÃ­tico. La autoevaluaciÃ³n honesta y el repaso activo son estrategias de aprendizaje poderosas.' }],
                desempenos: { superior: 'Relaciona todos los conceptos del perÃ­odo en un anÃ¡lisis empresarial integrador.', alto: 'Consolida los conceptos trabajados con coherencia.', basico: 'Participa activamente en actividades de refuerzo.', bajo: 'Requiere apoyo adicional para comprender los conceptos del perÃ­odo.' },
                indicadores: ['Participa activamente en actividades de refuerzo'], actividades: ['GuÃ­a de refuerzo', 'AutoevaluaciÃ³n'], evaluacion: ['AutoevaluaciÃ³n formativa']
            },

            {
                range: '9', dates: '06â€“10 abr',
                objetivo: 'Integrar conceptos econÃ³micos y financieros.',
                temas: [{ nombre: 'AnÃ¡lisis econÃ³mico integrador', texto: 'El anÃ¡lisis integrador aplica simultÃ¡neamente los conceptos empresariales del perÃ­odo para comprender una situaciÃ³n real. Evaluar una empresa implica analizar si innova, cuÃ¡l es su ciclo productivo, si sus ratios financieros son saludables y si su estructura patrimonial es equilibrada. Este enfoque sistÃ©mico es el que usan los analistas econÃ³micos y empresariales en la prÃ¡ctica profesional.' }],
                desempenos: { superior: 'Propone soluciones fundamentadas ante el caso integrador.', alto: 'Aplica mÃºltiples conceptos econÃ³micos en el caso integrador.', basico: 'Argumenta decisiones econÃ³micas con orientaciÃ³n.', bajo: 'Tiene dificultad para conectar los conceptos del perÃ­odo.' },
                indicadores: ['Argumenta decisiones econÃ³micas con fundamento'], actividades: ['Estudio de caso integrador'], evaluacion: ['RÃºbrica de desempeÃ±o']
            },

            {
                range: '10', dates: '13â€“17 abr',
                objetivo: 'Evaluar los aprendizajes del primer perÃ­odo.',
                temas: [{ nombre: 'EvaluaciÃ³n integral del perÃ­odo', texto: 'La evaluaciÃ³n integral del primer perÃ­odo verifica la comprensiÃ³n de los conceptos empresariales fundamentales: innovaciÃ³n, I+D+i, decisiones productivas, costos, ciclo financiero, estructura patrimonial y ratios. MÃ¡s que memorizaciÃ³n, se evalÃºa la capacidad de aplicar estos conceptos a situaciones reales y argumentar con coherencia econÃ³mica.' }],
                desempenos: { superior: 'Evidencia comprensiÃ³n global y profunda de todos los temas del perÃ­odo.', alto: 'Demuestra comprensiÃ³n econÃ³mica suficiente en la evaluaciÃ³n.', basico: 'Obtiene resultados satisfactorios en la evaluaciÃ³n.', bajo: 'No alcanza los niveles mÃ­nimos esperados.' },
                indicadores: ['Resultados satisfactorios en evaluaciÃ³n sumativa'], actividades: ['EvaluaciÃ³n escrita y prÃ¡ctica'], evaluacion: ['EvaluaciÃ³n sumativa']
            },

            {
                range: '11', dates: '20â€“24 abr',
                objetivo: 'Comprender la relaciÃ³n entre ingreso, producciÃ³n y empleo en la economÃ­a.',
                temas: [{ nombre: 'Ingreso nacional y producciÃ³n', texto: 'El ingreso nacional es la suma de todos los ingresos generados en una economÃ­a durante un perÃ­odo. EstÃ¡ directamente relacionado con el nivel de producciÃ³n: a mÃ¡s producciÃ³n, mÃ¡s ingresos y mÃ¡s empleo. Esta relaciÃ³n explica por quÃ©, cuando el gobierno o las empresas invierten mÃ¡s, la economÃ­a crece y el desempleo se reduce. Entender este vÃ­nculo es fundamental para evaluar polÃ­ticas econÃ³micas y sus efectos en la poblaciÃ³n.' }],
                desempenos: { superior: 'Analiza polÃ­ticas econÃ³micas considerando la relaciÃ³n ingresoâ€“producciÃ³nâ€“empleo.', alto: 'Explica cÃ³mo el nivel de producciÃ³n influye en el empleo.', basico: 'Relaciona producciÃ³n, ingreso y empleo mediante ejemplos.', bajo: 'Tiene dificultad para conectar producciÃ³n con empleo.' },
                indicadores: ['Relaciona producciÃ³n, ingreso y empleo mediante ejemplos'], actividades: ['Lectura guiada', 'Esquema conceptual', 'AnÃ¡lisis de caso sencillo'], evaluacion: ['ObservaciÃ³n', 'ParticipaciÃ³n', 'Actividad escrita corta']
            },

            {
                range: '12', dates: '27â€“30 abr',
                objetivo: 'Analizar el concepto de inflaciÃ³n y sus efectos.',
                temas: [{ nombre: 'InflaciÃ³n', texto: 'La inflaciÃ³n es el aumento generalizado y sostenido del nivel de precios de bienes y servicios. Con inflaciÃ³n cada peso compra menos: el poder adquisitivo de los hogares se deteriora. Sus causas son variadas: exceso de demanda, aumento de costos de producciÃ³n (inflaciÃ³n de costos) o emisiÃ³n excesiva de dinero. En Colombia, el Banco de la RepÃºblica fija metas de inflaciÃ³n y usa la tasa de interÃ©s como principal herramienta para controlarla.' }],
                desempenos: { superior: 'Propone medidas concretas para controlar la inflaciÃ³n en un contexto dado.', alto: 'Identifica tipos de inflaciÃ³n y sus consecuencias.', basico: 'Explica efectos de la inflaciÃ³n en el poder adquisitivo.', bajo: 'Confunde inflaciÃ³n con el aumento individual de precios.' },
                indicadores: ['Explica efectos de la inflaciÃ³n en el poder adquisitivo'], actividades: ['Ejemplos cotidianos', 'AnÃ¡lisis de precios', 'DiscusiÃ³n grupal'], evaluacion: ['Taller evaluativo']
            },

            {
                range: '13', dates: '04â€“08 may',
                objetivo: 'Comprender el concepto de pleno empleo.',
                temas: [{ nombre: 'Pleno empleo y desempleo', texto: 'El pleno empleo es el nivel de ocupaciÃ³n en el que prÃ¡cticamente todos los que buscan trabajo activamente lo encuentran. Siempre existe algo de desempleo "friccional" (personas entre empleos). El desempleo estructural (por cambios tecnolÃ³gicos) y el cÃ­clico (por recesiones) son los mÃ¡s preocupantes. En Colombia, el DANE mide la tasa de desempleo mensualmente mediante la Gran Encuesta Integrada de Hogares (GEIH), que tambiÃ©n revela los altos niveles de informalidad laboral.' }],
                desempenos: { superior: 'Propone polÃ­ticas concretas para reducir el desempleo estructural en Colombia.', alto: 'Diferencia pleno empleo y desempleo con ejemplos.', basico: 'Interpreta grÃ¡ficas bÃ¡sicas de empleo.', bajo: 'Confunde desempleo con inactividad laboral.' },
                indicadores: ['Interpreta grÃ¡ficas bÃ¡sicas de empleo'], actividades: ['ConstrucciÃ³n de grÃ¡ficas', 'ExplicaciÃ³n guiada'], evaluacion: ['Ejercicio prÃ¡ctico']
            },

            {
                range: '14', dates: '11â€“15 may',
                objetivo: 'Comprender los fundamentos del keynesianismo.',
                temas: [{ nombre: 'TeorÃ­a keynesiana', texto: 'John Maynard Keynes desarrollÃ³ su teorÃ­a durante la Gran DepresiÃ³n de los aÃ±os 30. Su argumento central: cuando la demanda privada cae, el Estado debe intervenir aumentando el gasto pÃºblico para reactivar la economÃ­a. Esta intervenciÃ³n activa contrasta con el liberalismo clÃ¡sico, que confiaba en que los mercados se corregÃ­an solos. El keynesianismo sigue siendo la base de muchas polÃ­ticas econÃ³micas actuales en todo el mundo.' }],
                desempenos: { superior: 'EvalÃºa crÃ­ticamente la pertinencia del keynesianismo en la economÃ­a colombiana actual.', alto: 'Explica la intervenciÃ³n del Estado segÃºn Keynes.', basico: 'Argumenta la necesidad de polÃ­ticas econÃ³micas activas.', bajo: 'Tiene dificultad para entender el rol del Estado en la economÃ­a.' },
                indicadores: ['Argumenta la necesidad de polÃ­ticas econÃ³micas activas'], actividades: ['Lectura crÃ­tica', 'Debate dirigido'], evaluacion: ['RÃºbrica de participaciÃ³n']
            },

            {
                range: '15', dates: '18â€“22 may',
                objetivo: 'Analizar la demanda agregada y el ingreso.',
                temas: [{ nombre: 'Demanda agregada', texto: 'La demanda agregada es la suma del gasto total de todos los agentes: consumo de los hogares, inversiÃ³n empresarial, gasto gubernamental y exportaciones netas. Es la principal variable que los gobiernos intentan gestionar para sostener el crecimiento econÃ³mico. Cuando cae, el PIB disminuye y el desempleo aumenta. Las polÃ­ticas fiscal y monetaria son los instrumentos clave para estimularla o moderarla segÃºn el ciclo econÃ³mico.' }],
                desempenos: { superior: 'Analiza cÃ³mo los cambios en la demanda agregada afectan el crecimiento econÃ³mico.', alto: 'Interpreta grÃ¡ficas de demanda agregada.', basico: 'Explica desplazamientos de la demanda con orientaciÃ³n.', bajo: 'Tiene dificultad para entender la demanda agregada.' },
                indicadores: ['Explica desplazamientos de la demanda agregada'], actividades: ['AnÃ¡lisis grÃ¡fico', 'Ejercicios aplicados'], evaluacion: ['Taller calificado']
            },

            {
                range: '16', dates: '25â€“29 may',
                objetivo: 'Relacionar ingresos, inflaciÃ³n y mercado.',
                temas: [{ nombre: 'InflaciÃ³n por demanda', texto: 'La inflaciÃ³n por demanda ocurre cuando la demanda crece mÃ¡s rÃ¡pido que la capacidad productiva: hay mÃ¡s dinero disponible para comprar los mismos o menos bienes, lo que empuja los precios hacia arriba. Es el tipo de inflaciÃ³n mÃ¡s comÃºn en Ã©pocas de auge econÃ³mico. Para contenerla, el Banco de la RepÃºblica sube las tasas de interÃ©s: el crÃ©dito se encarece, la gente gasta menos y los precios se estabilizan.' }],
                desempenos: { superior: 'DiseÃ±a una polÃ­tica econÃ³mica para controlar la inflaciÃ³n por demanda en un contexto dado.', alto: 'Explica el aumento de precios por exceso de demanda.', basico: 'Interpreta grÃ¡ficas ingresoâ€“inflaciÃ³n.', bajo: 'Confunde la inflaciÃ³n por demanda con otros tipos de inflaciÃ³n.' },
                indicadores: ['Interpreta grÃ¡ficas ingresoâ€“inflaciÃ³n'], actividades: ['Estudio de caso', 'ConstrucciÃ³n de grÃ¡ficos'], evaluacion: ['Lista de chequeo']
            },

            {
                range: '17', dates: '01â€“05 jun',
                objetivo: 'Reconocer el sistema financiero y su funciÃ³n.',
                temas: [{ nombre: 'Sistema financiero', texto: 'El sistema financiero es el conjunto de instituciones, mercados e instrumentos que permiten canalizar el ahorro de quienes tienen excedentes hacia quienes necesitan financiaciÃ³n para consumir o invertir. En Colombia lo integran el Banco de la RepÃºblica, los bancos comerciales, las corporaciones financieras, las compaÃ±Ã­as de seguros y los fondos de pensiones, todos bajo la supervisiÃ³n de la Superintendencia Financiera. Un sistema financiero sÃ³lido es condiciÃ³n necesaria para el crecimiento econÃ³mico sostenido.' }],
                desempenos: { superior: 'Analiza el rol del sistema financiero en el desarrollo econÃ³mico colombiano con argumentos crÃ­ticos.', alto: 'Identifica funciones del sistema financiero.', basico: 'Diferencia productos financieros bÃ¡sicos.', bajo: 'Tiene dificultad para identificar instituciones del sistema financiero.' },
                indicadores: ['Diferencia productos financieros bÃ¡sicos'], actividades: ['Mapa conceptual', 'Ejemplos reales'], evaluacion: ['Actividad escrita']
            },

            {
                range: '18', dates: '08â€“12 jun',
                objetivo: 'Comprender el crÃ©dito y el endeudamiento responsable.',
                temas: [{ nombre: 'CrÃ©dito y tasas de interÃ©s', texto: 'El crÃ©dito es el mecanismo mediante el cual una entidad financiera entrega dinero hoy con el compromiso de devolverlo en cuotas mÃ¡s un interÃ©s. La tasa de interÃ©s efectiva anual (TEA) determina el costo real del crÃ©dito. Un endeudamiento responsable implica: calcular la cuota mensual, verificar que no supere el 30% del ingreso, comparar tasas entre entidades y entender las condiciones del contrato. El sobreendeudamiento es una de las causas mÃ¡s comunes de crisis financieras personales y familiares.' }],
                desempenos: { superior: 'Compara productos crediticios del mercado y recomienda el mÃ¡s conveniente para un perfil dado.', alto: 'Explica riesgos y beneficios del crÃ©dito.', basico: 'EvalÃºa decisiones de endeudamiento con orientaciÃ³n.', bajo: 'Tiene dificultad para entender el funcionamiento del crÃ©dito.' },
                indicadores: ['EvalÃºa decisiones de endeudamiento'], actividades: ['AnÃ¡lisis de casos', 'SimulaciÃ³n financiera'], evaluacion: ['RÃºbrica']
            },

            {
                range: '19', dates: '15â€“19 jun',
                objetivo: 'Integrar los aprendizajes del perÃ­odo.',
                temas: [{ nombre: 'IntegraciÃ³n de contenidos â€” Segundo perÃ­odo', texto: 'La integraciÃ³n del segundo perÃ­odo conecta: ingreso nacional, inflaciÃ³n, pleno empleo, keynesianismo, demanda agregada, sistema financiero y crÃ©dito. Estos conceptos macroeconÃ³micos y financieros forman un sistema coherente: la polÃ­tica monetaria afecta el crÃ©dito, que influye en la demanda agregada, que impacta el empleo y la producciÃ³n. Comprender estas interrelaciones es el nivel mÃ¡s alto de anÃ¡lisis econÃ³mico en el bachillerato.' }],
                desempenos: { superior: 'DiseÃ±a propuestas de polÃ­tica econÃ³mica integrando mÃºltiples conceptos del perÃ­odo.', alto: 'Aplica conceptos del perÃ­odo a una situaciÃ³n real.', basico: 'Argumenta decisiones econÃ³micas con los conceptos aprendidos.', bajo: 'Requiere apoyo para conectar los conceptos del perÃ­odo.' },
                indicadores: ['Argumenta decisiones econÃ³micas integrando conceptos del perÃ­odo'], actividades: ['EvaluaciÃ³n integradora', 'SocializaciÃ³n'], evaluacion: ['EvaluaciÃ³n sumativa']
            },
            {
                range: '20', dates: '6–10 jul', objetivo: 'Comprender la oferta.',
                temas: [{ nombre: 'Oferta', texto: 'La oferta es la cantidad de un bien o servicio que los productores están dispuestos a vender a diferentes precios. La Ley de la Oferta establece que a mayor precio, mayor cantidad ofrecida (relación directa). La curva de oferta tiene pendiente positiva: los productores ofrecen más cuando el precio sube porque la producción adicional resulta más rentable.' }],
                desempenos: { superior: 'Analiza situaciones donde la ley de la oferta se cumple o se rompe.', alto: 'Explica la ley de la oferta con precisión.', basico: 'Interpreta gráficas de oferta básicas.', bajo: 'Confunde oferta con demanda.' },
                indicadores: ['Interpreta gráficas de oferta'], actividades: ['Taller gráfico'], evaluacion: ['Lista de chequeo']
            },

            {
                range: '21', dates: '13–17 jul', objetivo: 'Analizar cambios en la oferta.',
                temas: [{ nombre: 'Cambios en la oferta', texto: 'Los cambios en la oferta ocurren cuando factores distintos al precio hacen que los productores ofrezcan más o menos a cada precio. Estos factores incluyen: el precio de los insumos, la tecnología disponible, el número de productores y las políticas gubernamentales. Cuando cambian, la curva se desplaza hacia la derecha (más oferta) o hacia la izquierda (menos oferta).' }],
                desempenos: { superior: 'Predice desplazamientos de la oferta ante cambios en variables externas.', alto: 'Explica factores que alteran la oferta.', basico: 'Reconoce desplazamientos de la curva de oferta.', bajo: 'Confunde movimientos a lo largo de la curva con desplazamientos.' },
                indicadores: ['Reconoce desplazamientos de la curva de oferta'], actividades: ['Análisis comparativo'], evaluacion: ['Rúbrica']
            },

            {
                range: '22', dates: '21–24 jul', objetivo: 'Analizar el equilibrio en el mercado.',
                temas: [{ nombre: 'Equilibrio en el mercado', texto: 'El equilibrio de mercado es el punto donde la cantidad que los consumidores desean comprar es igual a la que los productores desean vender. En el precio de equilibrio no hay escasez ni excedente. Si el precio sube por encima del equilibrio hay exceso de oferta; si baja hay exceso de demanda. Los mercados tienden naturalmente al equilibrio aunque existen fricciones.' }],
                desempenos: { superior: 'Analiza situaciones de desequilibrio y propone mecanismos de ajuste.', alto: 'Explica el punto de equilibrio mediante ejemplos cotidianos.', basico: 'Identifica el equilibrio en gráficas de oferta y demanda.', bajo: 'Tiene dificultad para identificar el precio de equilibrio.' },
                indicadores: ['Identifica el equilibrio en gráficas de oferta y demanda'], actividades: ['Análisis de situaciones de mercado local'], evaluacion: ['Rúbrica de participación']
            },

            {
                range: '23', dates: '27–31 jul', objetivo: 'Comprender la elasticidad del mercado.',
                temas: [{ nombre: 'Elasticidad', texto: 'La elasticidad mide qué tan sensible es la cantidad demandada u ofrecida ante cambios en el precio. Un bien es elástico si una pequeña variación de precio genera un gran cambio en la cantidad (bienes de lujo). Es inelástico si el cambio es pequeño (medicamentos, gasolina). Conocer la elasticidad es fundamental para decisiones de precios e impuestos.' }],
                desempenos: { superior: 'Calcula y aplica la elasticidad en situaciones empresariales reales.', alto: 'Explica la relación entre precio y cantidad demandada/ofrecida.', basico: 'Diferencia elasticidad elástica e inelástica.', bajo: 'Confunde bienes elásticos e inelásticos.' },
                indicadores: ['Diferencia elasticidad elástica e inelástica'], actividades: ['Ejercicios prácticos con ejemplos reales'], evaluacion: ['Lista de chequeo']
            },

            {
                range: '24', dates: '3–7 ago', objetivo: 'Reconocer el mercado de trabajo.',
                temas: [{ nombre: 'Mercado de trabajo', texto: 'El mercado de trabajo es el espacio donde quienes ofrecen trabajo (trabajadores) se encuentran con quienes lo demandan (empleadores). El salario es el precio de este mercado. En Colombia el gobierno fija un salario mínimo legal para evitar la explotación en situaciones de exceso de oferta laboral.' }],
                desempenos: { superior: 'Analiza cómo las políticas laborales afectan el mercado de trabajo.', alto: 'Describe relaciones entre empleadores y trabajadores.', basico: 'Identifica oferta y demanda laboral en contextos reales.', bajo: 'Tiene dificultad para entender el mercado de trabajo como un mercado.' },
                indicadores: ['Identifica oferta y demanda laboral'], actividades: ['Análisis de noticias laborales'], evaluacion: ['Evaluación formativa']
            },

            {
                range: '25', dates: '10–14 ago', objetivo: 'Analizar la interacción entre oferta y demanda.',
                temas: [{ nombre: 'Interacción entre oferta y demanda', texto: 'La oferta y la demanda son las fuerzas que determinan precios y cantidades en los mercados. Si aumenta la demanda mientras la oferta se mantiene constante, el precio sube y los productores tienen incentivos para producir más. Esta interacción explica fenómenos cotidianos como los cambios en el precio de los alimentos, la gasolina o los arriendos.' }],
                desempenos: { superior: 'Predice precios de equilibrio ante cambios simultáneos en oferta y demanda.', alto: 'Interpreta gráficas económicas de oferta y demanda.', basico: 'Relaciona precios con cantidades ofrecidas y demandadas.', bajo: 'Tiene dificultad para leer gráficas de oferta y demanda.' },
                indicadores: ['Relaciona precios con cantidades ofrecidas y demandadas'], actividades: ['Construcción de gráficas'], evaluacion: ['Taller evaluativo']
            },

            {
                range: '26', dates: '17–21 ago', objetivo: 'Comprender el desempleo como problema económico y social.',
                temas: [{ nombre: 'Desempleo', texto: 'El desempleo afecta a personas en edad de trabajar que buscan empleo pero no pueden encontrarlo. Sus consecuencias son económicas y sociales: deterioro de la salud mental, aumento de la pobreza y exclusión social. En Colombia el desempleo juvenil es especialmente alto, generando una generación de jóvenes que no estudian ni trabajan.' }],
                desempenos: { superior: 'Propone políticas para reducir el desempleo juvenil en Colombia.', alto: 'Explica causas y consecuencias del desempleo.', basico: 'Reconoce los tipos de desempleo (friccional, estructural, cíclico).', bajo: 'Tiene dificultad para distinguir tipos de desempleo.' },
                indicadores: ['Reconoce tipos de desempleo con ejemplos'], actividades: ['Debate guiado'], evaluacion: ['Rúbrica']
            },

            {
                range: '27', dates: '24–28 ago', objetivo: 'Analizar cómo se mide el desempleo.',
                temas: [{ nombre: 'Medición del desempleo', texto: 'El DANE mide el desempleo en Colombia mediante la Gran Encuesta Integrada de Hogares (GEIH). La tasa de desempleo es el porcentaje de la Población Económicamente Activa que no tiene trabajo pero lo busca. No refleja la informalidad: muchos colombianos están "ocupados" en empleos informales sin prestaciones ni seguridad social.' }],
                desempenos: { superior: 'Critica las limitaciones de la tasa de desempleo como indicador.', alto: 'Explica la tasa de desempleo y cómo se calcula.', basico: 'Interpreta datos estadísticos básicos de empleo.', bajo: 'Confunde la tasa de desempleo con el número de desempleados.' },
                indicadores: ['Interpreta datos estadísticos básicos de empleo'], actividades: ['Análisis de cifras simuladas'], evaluacion: ['Lista de chequeo']
            },

            {
                range: '28', dates: '31 ago–4 sep', objetivo: 'Valorar el ahorro y el consumo responsable.',
                temas: [{ nombre: 'Ahorro y consumo', texto: 'El ahorro es la parte del ingreso que no se consume en el presente y se reserva para el futuro. A mayor ingreso, mayor consumo y ahorro posibles. Keynes formuló la "propensión marginal a consumir": la fracción de cada peso adicional de ingreso que se destina al consumo. Fomentar el ahorro es fundamental para la estabilidad financiera de los hogares.' }],
                desempenos: { superior: 'Diseña un plan de ahorro para un objetivo financiero específico.', alto: 'Explica la relación entre ingreso, consumo y ahorro.', basico: 'Propone hábitos financieros responsables.', bajo: 'Tiene dificultad para relacionar ingreso con ahorro y consumo.' },
                indicadores: ['Propone hábitos financieros responsables'], actividades: ['Taller con situaciones familiares'], evaluacion: ['Evaluación formativa']
            },

            {
                range: '29', dates: '7–11 sep', objetivo: 'Elaborar presupuestos responsables.',
                temas: [{ nombre: 'Presupuesto personal y familiar', texto: 'Un presupuesto es un plan financiero que registra los ingresos esperados y distribuye los gastos de forma organizada. Elaborarlo permite detectar gastos innecesarios, asignar recursos para el ahorro y evitar el sobreendeudamiento. La regla 50/30/20 sugiere destinar el 50% a necesidades, el 30% a deseos y el 20% al ahorro o pago de deudas.' }],
                desempenos: { superior: 'Diseña un presupuesto familiar realista incluyendo ahorro e imprevistos.', alto: 'Construye un presupuesto personal básico equilibrado.', basico: 'Organiza correctamente ingresos y gastos en un presupuesto.', bajo: 'Tiene dificultad para elaborar un presupuesto básico.' },
                indicadores: ['Organiza correctamente ingresos y gastos en un presupuesto'], actividades: ['Elaboración de presupuesto personal'], evaluacion: ['Evaluación práctica']
            },

            {
                range: '30', dates: '14–18 sep', objetivo: 'Comprender los fondos de inversión.',
                temas: [{ nombre: 'Fondo de inversión', texto: 'Un fondo de inversión reúne el dinero de múltiples inversionistas para invertirlo colectivamente en activos como acciones, bonos o bienes raíces. Permite a pequeños inversionistas acceder a carteras diversificadas que reducen el riesgo individual. En Colombia, los Fondos de Pensiones son un ejemplo: cada trabajador formal aporta mensualmente y el fondo invierte para garantizar su pensión futura.' }],
                desempenos: { superior: 'Compara fondos de inversión y recomienda el más adecuado para un perfil.', alto: 'Explica el propósito de invertir en fondos colectivos.', basico: 'Identifica riesgos y beneficios de los fondos de inversión.', bajo: 'Confunde ahorro con inversión.' },
                indicadores: ['Identifica riesgos y beneficios de los fondos de inversión'], actividades: ['Estudio de caso sencillo'], evaluacion: ['Lista de chequeo']
            },

            {
                range: '31', dates: '21–25 sep', objetivo: 'Analizar deudas y préstamos.',
                temas: [{ nombre: 'Deudas y préstamos', texto: 'Un préstamo es un producto financiero en el que una entidad entrega dinero a cambio de que se devuelva en cuotas más intereses. Las condiciones clave son: el monto, la tasa de interés efectiva anual, el plazo y las garantías. Las deudas bien gestionadas financian activos valiosos; las mal gestionadas generan sobreendeudamiento y destruyen el patrimonio familiar.' }],
                desempenos: { superior: 'Evalúa condiciones de diferentes préstamos y recomienda el más conveniente.', alto: 'Explica condiciones de un préstamo con precisión.', basico: 'Reconoce tasas, plazos y compromisos de un crédito.', bajo: 'Tiene dificultad para entender las condiciones de un préstamo.' },
                indicadores: ['Reconoce tasas, plazos y compromisos de un préstamo'], actividades: ['Análisis de contratos simulados'], evaluacion: ['Rúbrica']
            },

            {
                range: '32', dates: '28 sep–2 oct', objetivo: 'Diferenciar micro y macroeconomía (revisión integradora).',
                temas: [{ nombre: 'Microeconomía y macroeconomía — revisión', texto: 'Al finalizar el año revisamos la distinción micro–macro con mayor profundidad. La microeconomía ahora incluye mercados, oferta, demanda y elasticidad. La macroeconomía incluye ingreso nacional, inflación, desempleo, sistema financiero y políticas económicas. La economía real es la interacción constante entre estos dos niveles.' }],
                desempenos: { superior: 'Analiza una problemática desde la perspectiva micro y macro simultáneamente.', alto: 'Clasifica situaciones micro y macroeconómicas con precisión.', basico: 'Reconoce diferencias conceptuales entre los dos niveles.', bajo: 'Aún confunde los niveles de análisis económico.' },
                indicadores: ['Clasifica situaciones micro y macroeconómicas con precisión'], actividades: ['Cuadro comparativo integrador'], evaluacion: ['Taller escrito']
            },

            {
                range: '33', dates: '13–16 oct', objetivo: 'Comprender el PIB y su relación con el bienestar.',
                temas: [{ nombre: 'Producto Interno Bruto (PIB)', texto: 'El PIB es el valor total de todos los bienes y servicios producidos en un país durante un año, y es el indicador más usado para medir el crecimiento económico. Sin embargo, no mide la distribución del ingreso, no cuenta la economía informal ni el trabajo doméstico. En Colombia el PIB per cápita no refleja la realidad de millones de colombianos en pobreza.' }],
                desempenos: { superior: 'Critica las limitaciones del PIB como medidor de bienestar.', alto: 'Explica qué mide el PIB y sus componentes.', basico: 'Interpreta datos económicos básicos del PIB.', bajo: 'Confunde el PIB con el ingreso personal.' },
                indicadores: ['Interpreta datos económicos básicos del PIB'], actividades: ['Análisis de datos simulados'], evaluacion: ['Evaluación formativa']
            },

            {
                range: '34', dates: '19–23 oct', objetivo: 'Analizar el papel del dinero en la economía.',
                temas: [{ nombre: 'El dinero', texto: 'El dinero es cualquier instrumento aceptado como medio de pago, unidad de cuenta y reserva de valor. Históricamente evolucionó del trueque al dinero mercancía, al papel moneda y hoy al dinero digital y las criptomonedas. El Banco de la República es el único autorizado para emitir papel moneda en Colombia. Emitir dinero en exceso genera inflación; emitir muy poco puede frenar el crecimiento.' }],
                desempenos: { superior: 'Analiza el impacto de las criptomonedas en el futuro del dinero.', alto: 'Explica funciones y tipos de dinero con claridad.', basico: 'Relaciona el dinero con el intercambio económico.', bajo: 'Tiene dificultad para entender las funciones del dinero.' },
                indicadores: ['Relaciona el dinero con el intercambio económico'], actividades: ['Línea de tiempo del dinero'], evaluacion: ['Evaluación sumativa']
            }
        ]
    },

    // ─────────────────────────────────────────────
    //  ÉTICA Y VALORES — Grados 93 y 94
    // ─────────────────────────────────────────────
    etica: {
        id: 'etica',
        name: 'Ética y Valores',
        shortName: 'ÉTICA Y VALORES',
        grades: '93-94',
        icon: 'shield',
        color: '#f97316',
        totalWeeks: 37,
        totalUnits: 6,
        weeks: [
            {
                range: '1-4', dates: 'Ene 27 – Feb 20',
                objetivo: 'Reconocer la ética como disciplina fundamental para la vida en sociedad y la formación del carácter moral.',
                temas: [
                    { nombre: 'Concepto de ética y moral', texto: 'La ética es la rama de la filosofía que estudia el comportamiento humano y sus fundamentos, buscando responder preguntas como: ¿Qué es lo bueno? ¿Qué debo hacer? ¿Cómo debo tratar a los demás? La moral, en cambio, son las normas y costumbres aceptadas por un grupo social en un momento histórico. La ética reflexiona críticamente sobre la moral, permitiéndonos cuestionarla y mejorarla. Ser ético no es seguir reglas ciegamente, sino actuar desde la reflexión y la responsabilidad.' },
                    { nombre: 'Valores personales y sociales', texto: 'Los valores son principios que guían nuestro comportamiento y nos dicen qué es importante en la vida. Los valores personales (honestidad, responsabilidad, respeto) orientan nuestras decisiones individuales. Los valores sociales (justicia, solidaridad, equidad) orientan las relaciones colectivas. Los valores no se imponen: se forman a través de la familia, la educación, las amistades y las experiencias. Reflexionar sobre nuestros valores nos ayuda a actuar con integridad y a construir relaciones sanas.' },
                    { nombre: 'Autonomía y responsabilidad', texto: 'La autonomía es la capacidad de gobernarse a uno mismo, de tomar decisiones libres y reflexivas sin depender únicamente de órdenes externas. Ser autónomo no significa hacer lo que uno quiera sin importarle el impacto en los demás: implica asumir la responsabilidad de las consecuencias de las propias acciones. La autonomía y la responsabilidad son valores fundamentales para la vida ética: una persona autónoma y responsable puede vivir en comunidad con libertad y dignidad.' }
                ],
                desempenos: { superior: 'Argumenta críticamente la importancia de la ética en la vida cotidiana.', alto: 'Explica la diferencia entre ética y moral con ejemplos.', basico: 'Identifica valores fundamentales para la convivencia.', bajo: 'Reconoce el concepto básico de ética.' },
                indicadores: ['Define ética y moral', 'Identifica valores personales y sociales'],
                actividades: ['Reflexión personal', 'Dilemas morales', 'Debates éticos'],
                evaluacion: ['Observación directa', 'Lista de chequeo']
            },
            {
                range: '5-20', dates: 'Feb 23 – May 29',
                objetivo: 'Analizar los valores fundamentales para la convivencia ciudadana y desarrollar pensamiento crítico frente a situaciones éticas complejas.',
                temas: [
                    { nombre: 'Respeto, tolerancia y solidaridad', texto: 'El respeto es el reconocimiento de la dignidad y los derechos de cada persona, independientemente de sus características. La tolerancia va más allá de soportar lo diferente: implica reconocer que la diversidad de opiniones, creencias y formas de vida es legítima y valiosa. La solidaridad es el compromiso activo con el bienestar de los demás, especialmente de quienes están en situación de vulnerabilidad. Estos tres valores son la base de cualquier convivencia pacífica y justa.' },
                    { nombre: 'Derechos humanos y dignidad', texto: 'Los derechos humanos son garantías universales, inalienables e indivisibles que pertenecen a toda persona por el simple hecho de ser humana. Fueron proclamados en la Declaración Universal de 1948, después del horror de la Segunda Guerra Mundial, con el propósito de que nunca volviera a ocurrir algo similar. La dignidad humana es el fundamento de todos los derechos: toda persona merece ser tratada como un fin en sí misma, nunca como un simple medio. Conocer y defender los derechos humanos es un acto de responsabilidad ética y ciudadana.' },
                    { nombre: 'Pensamiento crítico y ético', texto: 'El pensamiento crítico es la capacidad de analizar situaciones desde múltiples perspectivas, cuestionando los supuestos y las argumentaciones, identificando falacias y buscando la verdad más allá de las apariencias. Aplicado a la ética, el pensamiento crítico nos permite reconocer cuando se nos está manipulando, cuando una norma es injusta, cuando un argumento oculta intereses particulares o cuando nuestros propios prejuicios nos impiden ver la realidad. Pensar críticamente es un acto de libertad.' }
                ],
                desempenos: { superior: 'Analiza críticamente situaciones éticas complejas y propone soluciones.', alto: 'Relaciona los derechos humanos con la ética personal.', basico: 'Identifica situaciones que vulneran la dignidad humana.', bajo: 'Reconoce la importancia de los derechos humanos.' },
                indicadores: ['Aplica valores en situaciones reales', 'Analiza dilemas éticos', 'Propone mejoras para la convivencia'],
                actividades: ['Análisis de casos', 'Juego de roles', 'Ensayos reflexivos', 'Foros de discusión'],
                evaluacion: ['Rúbrica', 'Ensayo', 'Trabajo colaborativo']
            },
            {
                range: '21-37', dates: 'Jun 01 – Nov 28',
                objetivo: 'Integrar los valores éticos en proyectos de vida personales y comunitarios orientados hacia el bien común.',
                temas: [
                    { nombre: 'Proyecto de vida', texto: 'El proyecto de vida es la planificación consciente del camino que queremos recorrer como personas. Incluye la definición de quiénes somos, qué queremos lograr, qué valores nos guían y qué acciones concretas tomaremos para alcanzar nuestras metas. Un proyecto de vida ético considera no solo el bienestar personal, sino también el impacto que tendremos en los demás y en la comunidad. Construir un proyecto de vida es uno de los actos más significativos que podemos hacer en la adolescencia: es elegir quiénes queremos ser.' },
                    { nombre: 'Liderazgo ético', texto: 'El líder ético es quien guía a otros desde el ejemplo, la honestidad y el compromiso con el bien común. No ejerce el poder por beneficio personal, sino como servicio a su comunidad. Un líder ético escucha, incluso a quienes tienen perspectivas diferentes; reconoce sus errores y aprende de ellos; defiende los derechos de los más vulnerables y actúa con transparencia. El liderazgo ético no es para pocos elegidos: se puede ejercer desde el aula, la familia, el barrio y cualquier espacio donde convivamos con otros.' },
                    { nombre: 'Servicio comunitario', texto: 'El servicio comunitario es una forma de aprendizaje y de ejercicio ciudadano en la que los estudiantes contribuyen activamente al bienestar de su comunidad. Puede tomar muchas formas: tutorías a compañeros con dificultades, acciones ambientales, apoyo a personas en situación de vulnerabilidad, actividades culturales o campañas de sensibilización. El servicio comunitario enseña que la vida ética no se reduce a las buenas intenciones: requiere acciones concretas, compromiso sostenido y disposición para trabajar junto a otros.' }
                ],
                desempenos: { superior: 'Diseña un proyecto de vida coherente con sus valores éticos.', alto: 'Relaciona el liderazgo ético con el bien común.', basico: 'Identifica elementos de un proyecto de vida.', bajo: 'Reconoce la importancia de tener metas personales.' },
                indicadores: ['Diseña proyecto de vida con valores', 'Propone acciones de servicio comunitario'],
                actividades: ['Proyecto de vida', 'Exposiciones', 'Jornada de servicio'],
                evaluacion: ['Portafolio', 'Rúbrica de proyecto']
            }
        ]
    }
};
