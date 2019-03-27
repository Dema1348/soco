(function() {
  'use strict';

  angular.module('app').controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope) {
    var vm = this;
    vm.close = close;
    vm.search = search;
    vm.closeSearch=closeSearch;
    vm.changeValue=changeValue;
    vm.keywokd="";
    vm.closeFind=closeFind;
    vm.data =  [
            {
                "titulo": "Highlights financieros",
                "parrafo": "El 2018 Empresas Socovesa sobrepasó por quinto año consecutivo el umbral del MMUF 1 en utilidades y alcanzó ingresos superiores a lo presupuestado, con un margen bruto que se mantuvo en 28%. La Compañía además se preparó y modernizó internamente para enfrentar el nuevo ciclo de crecimiento económico.",
                "uri": "app.pages.financieros"
            },
            {
                "titulo": "Highlights financieros",
                "parrafo": "Empresas Socovesa registró ingresos un 17% inferior a los del año 2017. Sin embargo, el margen bruto total prácticamente se mantiene en relación al 2018, a pesar de la baja en la escrituración.",
                "uri": "app.pages.financieros"
            },
            {
                "titulo": "Highlights financieros",
                "parrafo": "Margen Ebitda se mantiene en niveles de 19%.",
                "uri": "app.pages.financieros"
            },
            {
                "titulo": "Highlights financieros",
                "parrafo": "El ROE mejora XXX puntos porcentuales el 2018.",
                "uri": "app.pages.financieros"
            },
            {
                "titulo": "Highlights financieros",
                "parrafo": "Precio de la acción de Socovesa S.A. vs IPSA",
                "uri": "app.pages.financieros"
            },
            {
                "titulo": "Highlights financieros",
                "parrafo": "Indicadores de la Acción, Nº acciones (MM), Precio acción al cierre ($), Valor libro ($), Patrimonio bursátil (MM$), Bolsa / Libro (veces) y Precio / Utilidad (veces)",
                "uri": "app.pages.financieros"
            },
            {
                "titulo": "Modernización de la estructura organizacional",
                "parrafo": "Pensar en futuro. Modernización de la estructura organizacional. Durante el 2018 Empresas Socovesa inició un proceso interno de transformación el cual le permitirá fortalecer su capacidad de enfocarse en el consumidor y avanzar hacia una compañía de diseño centrada en el habitar.",
                "uri": "app.pages.highlight.futura"
            },
            {
                "titulo": "Modernización de la estructura organizacional",
                "parrafo": "Hoja de ruta. Horas dedicadas a la planificación e implementación del plan de modernización de Empresas Socovesa.",
                "uri": "app.pages.highlight.futura"
            },
            {
                "titulo": "Modernización de la estructura organizacional",
                "parrafo": "Una sola compañia. Año en que se estima que la Compañía se traslade al nuevo edificio corporativo, hito que marca la materialización final del proceso de modernización.",
                "uri": "app.pages.highlight.futura"
            },
            {
                "titulo": "Modernización de la estructura organizacional",
                "parrafo": "Participación interna. Número de colaboradores que participaron en la definición de lineamientos estratégicos y culturales de Empresas Socovesa.",
                "uri": "app.pages.highlight.futura"
            },
            {
                "titulo": "Diseño y venta de valor",
                "parrafo": "Pensar en las personas. Diseño y venta de valor. El negocio de Empresas Socovesa empieza y termina en las personas. Durante el 2018 la compañía dedicó esfuerzos relevantes para estudiar las necesidades del habitar y desarrollar un modelo de venta de valor capaz de transmitir al cliente el valor de lo diseñado.",
                "uri": "app.pages.highlight.personas"
            },
            {
                "titulo": "Diseño y venta de valor",
                "parrafo": "Centrarse en las personas. Cantidad de personas encuestadas y entrevistadas durante el 2018 por el área de Research como fuente para el desarrollo de producto y evaluación de calidad del servicio.",
                "uri": "app.pages.highlight.personas"
            },
            {
                "titulo": "Diseño y venta de valor",
                "parrafo": "Insights. Cantidad de personas encuestadas y entrevistadas durante el 2018 por el área de Research como fuente para el desarrollo de producto y evaluación de calidad del servicio.",
                "uri": "app.pages.highlight.personas"
            },
            {
                "titulo": "Diseño y venta de valor",
                "parrafo": "Pensando los proyectos. 837 horas invertidas en sesiones de planning 1, 2 y 3 (conceptualización, ideación y diseño de productos centrados en las necesidades de las personas) .",
                "uri": "app.pages.highlight.personas"
            },
            {
                "titulo": "Diseño y venta de valor",
                "parrafo": "Experiencias. El 88% de los cotizantes evalúa experiencia de visita a proyectos de forma \"superior\" o \"considerablemente superior\" a la competencia.",
                "uri": "app.pages.highlight.personas"
            },
            {
                "titulo": "Diseño digital y transformación de la constructora",
                "parrafo": "Pensar en innovación. Diseño digital y transformación de la constructora. Prepararse para el futuro exige repensar la construcción y hacerla más eficiente y productiva. El 2018 se consolidaron las bases del modelo BIM y se capacitaron decenas de ejecutivos en Lean Construction, acciones que permitirán a la Compañía avanzar en esta dirección.",
                "uri": "app.pages.highlight.innovacion"
            },
            {
                "titulo": "Diseño digital y transformación de la constructora",
                "parrafo": "Construir digitalmente. Más de 10 mil horas dedicadas a actividades de investigación y desarrollo para la implementación de Bim y Lean dentro de Empresas Socovesa.",
                "uri": "app.pages.highlight.innovacion"
            },
            {
                "titulo": "Diseño digital y transformación de la constructora",
                "parrafo": "Lean Construction. El 63% de los ejecutivos con posición de liderazgo en las gerencias de Construcción (Socovesa Santiago), BIM y Clientes, participó del programa “Lean Construction” de la Pontificia Universidad Católica de Chile, auspiciados por la Compañía.",
                "uri": "app.pages.highlight.innovacion"
            },
            {
                "titulo": "Diseño digital y transformación de la constructora",
                "parrafo": "Capacitación BIM y Lean. Más de 7 mil horas de capacitación en metodología y herramientas BIM-Lean.",
                "uri": "app.pages.highlight.innovacion"
            },
            {
                "titulo": "Diseño sostenible y vinculación con el entorno",
                "parrafo": "Pensar en lo que nos rodea. Diseño sostenible y vinculación con el entorno. Año a año Empresas Socovesa ha ido avanzando y profundizando en su estrategia de sostenibilidad, promoviendo el diálogo con los vecinos y con iniciativas que van en línea con un desarrollo urbano más armónico y más respetuoso con el entorno.",
                "uri": "app.pages.highlight.rodea"
            },
            {
                "titulo": "Diseño sostenible y vinculación con el entorno",
                "parrafo": "Buenas prácticas. Durante 14 días, un grupo de altos ejecutivos de la Empresa viajó por 2 semanas a Escandinavia para conocer las mejores prácticas en desarrollo urbano sostenible y manejo de comunidades.",
                "uri": "app.pages.highlight.rodea"
            },
            {
                "titulo": "Diseño sostenible y vinculación con el entorno",
                "parrafo": "Bien común. Familias potencialmente beneficiadas por proyectos de equipamiento deportivo y cultural desarrollados por las marcas del Grupo. Estos proyectos fueron gestionados y diseñados conjuntamente entre la Compañía y la comunidad",
                "uri": "app.pages.highlight.rodea"
            },
            {
                "titulo": "Diseño sostenible y vinculación con el entorno",
                "parrafo": "Trabajo con la comunidad (Techo). En alianza con la Fundación Techo, Socovesa Santiago dedicó 40 horas a apoyar a las familias beneficiarias del DS19, asesorando y acompañándolas en su integración al nuevo entorno social y promoviendo la vinculación comunitaria.",
                "uri": "app.pages.highlight.rodea"
            },
            {
                "titulo": "Talento y trabajo colaborativo",
                "parrafo": "Pensar en equipos. Talento y trabajo colaborativo. Las personas son la fuerza movilizadora de Empresas Socovesa. Desarrollar, retener y atraer al mejor talento de la industria ha sido un acento fundamental de la gestión de Recursos Humanos durante los últimos años.",
                "uri": "app.pages.highlight.equipo"
            },
            {
                "titulo": "Talento y trabajo colaborativo",
                "parrafo": "Liderazgo interno. 102 horas dedicadas a fortalecer las habilidades de liderazgo de los principales ejecutivos de las filiales y el Corporativo.",
                "uri": "app.pages.highlight.equipo"
            },
            {
                "titulo": "Talento y trabajo colaborativo",
                "parrafo": "Best place to work. Casi el 80% de los colaboradores considera que Empresas Socovesa es un buen lugar para trabajar.",
                "uri": "app.pages.highlight.equipo"
            },
            {
                "titulo": "Talento y trabajo colaborativo",
                "parrafo": "Trabajo de obra. En el año 2018 operaron 38 equipos de Recursos Humanos en obras de la Compañía. El objetivo es descentralizar la toma de decisiones y que sean las personas en obra las que decidan cómo maximizar la productividad y su calidad de vida laboral.",
                "uri": "app.pages.highlight.equipo"
            },
            {
                "titulo": "Talento y trabajo colaborativo",
                "parrafo": "Factores psicosociales. El año 2018 se destinaron 912 horas en obra a conversar sobre cómo convertirlas en mejores lugares para trabajar. Se utilizó como guía el Protocolo de Factores Psicosociales.",
                "uri": "app.pages.highlight.equipo"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "La visión general de la empresa ha apuntado a fortalecer nuestra capacidad para generar acuerdos. La compañía privilegia las soluciones conversadas por sobre la judicialización.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Durante los últimos años, la industria inmobiliaria ha desarrollado su quehacer de negocios en un contexto regulatorio y de comunidades más complejo. Zonas sin regulación urbana o con regulación insuficiente dieron origen al caso de la híper densificación que vive la comuna de Estación Central. En las comunas de Santiago Centro y Las Condes se ha cuestionado la validez de los planes reguladores comunales en aquellos aspectos referidos a premios o incentivos normativos. ",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "También hay nuevas regulaciones generales, como la Ley de Aportes Espacio Público, que aún no rigen a cabalidad por el dilatado trámite de redacción de su reglamento. Por otra parte, se han generado diferencias de criterios entre los organismos llamados a interpretar la legislación urbana tales como Seremi, Contraloría y Tribunales de Justicia. Y finalmente, es indudable que las comunidades y ONG están más preparadas que nunca, con puntos de vista razonables y muchas veces legítimos, que exigen del sector –cuando menos- un trabajo más riguroso.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "En este nuevo escenario, los estudios, autorizaciones y permisos que deben obtenerse para el desarrollo de un proyecto inmobiliario se han transformado en un punto crítico del negocio y ha traído, como consecuencia, un ajuste en los plazos históricos de desarrollo de un proyecto. Si antes el inicio de la construcción tomaba de 4 a 8 meses desde que el terreno era adquirido, hoy esos plazos han aumentado y fluctúan en un rango que va de los 6 a 18 meses en promedio.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Los permisos críticos hoy son los medioambientales, los Eistu (Estudios de impacto sobre el transporte urbano), los anteproyectos de edificación, que fijan el marco normativo de un proyecto específico, y los permisos de edificación, que autorizan el desarrollo inmobiliario en el marco regulatorio definido en el anteproyecto. ",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Tiendo a pensar que un adecuado manejo de esta área generará algunas barreras de entrada que eventualmente beneficiarán a las empresas que hayan sabido sistematizar y controlar adecuadamente los diferentes procesos que deben llevarse a cabo para poder enajenar un producto inmobiliario.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Ahora bien, a nivel de nuestra empresa, ¿cómo nos hemos adaptado para enfrentar este escenario de mayor incertidumbre? Lo primero ha sido el trabajo preventivo interno. En Socovesa se ha fortalecido el trabajo multidisciplinario entre las diferentes áreas de la empresa para prevenir eventuales conflictos tanto regulatorios como comunitarios.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Así, arquitectos, revisores independientes, desarrolladores, constructores y abogados analizan pormenorizadamente las diferentes aristas regulatorias de un proyecto antes de proponer su ejecución. Luego está el trabajo gremial. Hemos apoyado decididamente a nuestra asociación gremial (ADI) en sus acercamientos y conversaciones con las autoridades sectoriales, desde donde creemos que deben promoverse las modernizaciones y mejoras en la normativa urbana.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Pero por sobre todo, la visión general de la empresa ha apuntado a fortalecer nuestra capacidad para generar acuerdos. La compañía privilegia las soluciones conversadas por sobre la judicialización de los casos difíciles.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "En concreto, el año pasado sólo tuvimos un caso difícil en sede judicial (ya cerrado mediante acuerdo), dentro de un universo de más de 100 proyectos y nuevas etapas en ejecución. Para el año 2019 pensamos que ese número de casos difíciles no se incrementará en forma relevante.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "No existe un problema de certeza jurídica en la industria inmobiliaria. Creemos que las reglas del juego han sido y siguen siendo razonablemente claras y consideramos que, como compañía, hemos logrado adaptarnos oportunamente al nuevo contexto.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "De cara al futuro, entendemos que la pre-visualización por parte de todos los stakeholders de un proyecto y la participación ciudadana serán temas relevantes para el desarrollo del negocio inmobiliario y su mayor legitimidad. ",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "La gestión de las diferentes controversias que ha tenido la empresa nos ha demostrado que la participación ciudadana tiende a disminuir el riesgo de los proyectos y que no tiene costos realmente incidentes en la rentabilidad.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Es más, incluso en algunos casos, los procesos participativos tienden a favorecer plazos de entrega e incluso a mejorar el diseño mismo de los proyectos.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Para terminar no quisiera dejar de referirme muy brevemente a los resultados de la compañía. Si bien las utilidades del ejercicio 2018 (UFMM 1,26) son inferiores a las obtenidas en 2017 (UFMM 1,47), vale la pena destacar que la empresa cumplió sus metas con holgura y que este es el quinto año consecutivo de buenos resultados económicos para los accionistas, por sobre el UFMM 1.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "La solidez que genera nuestra fortalecida posición financiera nos ha permitido prepararnos para los años que vienen.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "La transformación organizacional que experimenta la compañía y nuestro renovado portafolio de tierra y proyectos nos permiten proyectar auspiciosamente los próximos ejercicios.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Por último, un reconocimiento a todas las personas que conforman Empresa Socovesa. Nuestros logros empresariales no serían posibles sin su esfuerzo y dedicación. Mis más sinceros agradecimientos a todos quienes aquí trabajan.",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Presidente",
                "parrafo": "Nuestra experiencia nos ha demostrado que la participación ciudadana tiende a disminuir el riesgo de los proyectos y no tiene costos realmente incidentes en la rentabilidad",
                "uri": "app.pages.carta-presidente"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "La visión general de la empresa ha apuntado a fortalecer nuestra capacidad para generar acuerdos. La compañía privilegia las soluciones conversadas por sobre la judicialización",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Si bien el repunte de la demanda residencial comenzó durante el segundo semestre del 2017, ésta experimentó un punto de inflexión y aceleración producto del cambio del ciclo político que vivimos en diciembre de ese mismo año. En este nuevo contexto político y económico, durante el año 2018 las promesas de negocio de la industria residencial crecieron un 14% en relación al 2017.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "En el caso de Empresas Socovesa, las ventas (promesas de negocio) crecieron un 15% durante el año, cerrando en MMUF 13, con un marcado fortalecimiento de la zona sur de Chile, el repunte del mercado de las casas en los segmentos altos de la Región Metropolitana y una mayor incidencia de los inversionistas institucionales.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Por otra parte, y en línea con lo informado al mercado durante el año y producto del rezago, desde una perspectiva financiera, de 18 a 24 meses que existe entre ventas y facturación en la industria inmobiliaria residencial, los resultados del ejercicio 2018 están afectados a la baja producto de la contracción que experimentó la demanda residencial durante el año 2016, post efecto IVA a la construcción.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "En este sentido, al cierre del ejercicio, los resultados de la Compañía están marcados por un menor volumen de facturación y por la escrituración de proyectos con márgenes inferiores a los años anteriores.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "En consecuencia, Empresas Socovesa registró ingresos un 17% menores al 2017, con un margen bruto de 27,5%. Con todo, la utilidad de la Compañía alcanzó a MMUF XXX cifra que es un XXX% inferior a la registrada el 2017, pero que nos instala por quinto año consecutivo con resultados por sobre el umbral del MMUF 1.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Proyectándonos al mediano plazo y siempre que los fundamentos económicos del negocio se mantengan estables –como ha sucedido durante los últimos 12 meses-, es decir, crecimiento económico moderado, una tasa de inflación baja, fortalecimiento de la masa salarial, tasas de interés de largo plazo estables y expectativas razonables tanto de los consumidores como de los empresarios, de cara al periodo 2019-2021, la Compañía está en condiciones de proyectar un crecimiento orgánico del 10% anual compuesto, tanto para los niveles de facturación como de promesas de venta.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "El stock de proyectos armados que tiene la Compañía, con tierra comprada y el diseño/construcción en alguna etapa del proceso, nos permite pensar que las promesas de negocio podrían subir desde un nivel de MMUF 13 el 2019, a MMUF 15 el 2020 para llegar a cerca de MMUF 17 el 2021. Por su parte, se proyecta que la facturación llegue a MMUF 13 el 2019, para subir a MMUF 15 el 2020 y finalmente instalarse en el entorno de los MMUF 16 el año 2021.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "No existe un problema de certeza jurídica en la industria inmobiliaria. Creemos que las reglas del juego han sido y siguen siendo razonablemente claras y consideramos que, como compañía, hemos logrado adaptarnos oportunamente al nuevo contexto.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Durante el 2018, Empresas Socovesa inició un proceso de transformación de su estructura organizacional buscando adaptarse mejor al nuevo entorno de negocios además de proyectar la Compañía de cara a los próximos 10 años. ",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Este cambio busca generar inmobiliarias más enfocadas en el core del negocio que es diseñar y vender valor, y con áreas de soporte corporativas más fuertes y especialistas.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "A diferencia de lo que suele suceder, esta transformación no encuentra sus fundamentos en una de reducción de costos o un mal desempeño financiero, sino que –muy por el contrario-, busca aprovechar el buen momento financiero que vive la Compañía después de cinco años consecutivos de sólidos resultados económicos y proyectar a Empresas Socovesa al mediano plazo.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "A nivel corporativo, los principales cambios implementados durante el año fueron la creación de tres nuevas gerencias: Operaciones Comerciales, Arquitectura e Inversiones. Esta última, que comenzará a operar el 2019, tendrá la tarea de encontrar buena tierra tanto para los desarrollos residenciales como para los nuevos desarrollos mixtos del grupo.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Adicionalmente, en el área de las constructoras se definió que la entrada de las metodologías de trabajo BIM y LEAN construction serán las fuerzas que irán generando los cambios que mejorarán la planificación y productividad de las obras. ",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "A nivel de líneas de negocio, se renovaron los nivel de líneas de negocio, se renovaron los liderazgos de las filiales, siendo José Gras y Pablo Hachim, los nuevos gerentes generales de Pilares y Almagro, respectivamente.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Este último asumirá la gerencia en abril de 2019. Finalmente se decidió que la constructora Socovesa Santiago pasará a reportar directamente al corporativo, atendiendo a sus dos clientes internos (Socovesa Santiago y Pilares).",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Siguiendo la misma lógica de convertirnos en una sola gran empresa, con filiales más enfocadas y servicios corporativos fortalecidos, durante el 2018 se vendieron los edificios de Eliodoro Yáñez y Padre Mariano, dándose inicio a la búsqueda de tierra para desarrollar un nuevo edificio corporativo para las operaciones en Santiago, que debiera estar operativo el año 2024. ",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "En este sentido, el proceso de transformación iniciado durante el año tendrá como resultado una nueva estructura organizacional y también un nuevo lugar de trabajo.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Ahora bien, creo que el principal beneficio del proceso de transformación organizacional que iniciamos durante el año fue la definición colaborativa y participativa de una renovada agenda estratégica.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Un nuevo relato que reúne las diferentes definiciones e iniciativas que hemos trabajado durante los últimos años.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Estas definiciones le dieron sentido al proceso de cambio y nos permitieron mirar los años que vienen con más seguridad y confianza en el trabajo que venimos haciendo. ",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "De aquí al 2025 nos queremos convertir en una empresa de Diseño Centrada en el Habitar. Queremos ser una sola compañía que haga proyectos que tengan alta sintonía con el consumidor y que obtengan buenas rentabilidades por ello.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Creemos que la era digital generará un proceso constructivo más eficiente, planificado y productivo. Buscamos tener buenas relaciones con stakeholders y las comunidades de nuestros proyectos. Y finalmente, creemos que nuestra gente tendrá la capacidad de trabajo y empuje necesarios para lograr los objetivos definidos.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "Para terminar, creo que la Compañía está en un muy buen momento. Cuenta con una sólida batería de proyectos en desarrollo que durante los próximos años nos permitirán crecer, nuevos liderazgos, una renovada estructura organizacional, una estrategia con la legitimidad de los buenos resultados de los últimos años y finalmente, el trabajo participativo de nuestra gente. Es decir, creo que la Empresa está bien preparada para los próximos años.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Carta del Gerente General",
                "parrafo": "El stock de proyectos armados que tiene la Compañía nos permite pensar que las promesas de negocio podrían subir desde un nivel de MMUF 13 el 2019, a MMUF 15 el 2020 para llegar a cerca de MMUF 17 el 2021.",
                "uri": "app.pages.carta-gerente-general"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "El contexto inmobiliario cambió en los últimos 10 años. Viviendas para habitar, departamentos para arrendar, preferencia por vivir en comunas céntricas, departamentos de menor superficie, nichos con necesidades cada vez más específicas y productos más competitivos, son algunos conceptos que grafican esta transformación.",
                "uri": "app.pages.tendencias"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "Empresas Socovesa registró ingresos un 17% inferior a los del año 2017. Sin embargo, el margen bruto total prácticamente se mantiene en relación al 2018, a pesar de la baja en la escrituración.",
                "uri": "app.pages.tendencias"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "El mercado de la renta aumenta y es ocupado por nuevos nichos de mercado como estudiantes, personas separadas o parejas sin hijos.",
                "uri": "app.pages.tendencias"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "Las personas están demandando proyectos de menor superficie. Variables como el aumento en el precio de las viviendas y nuevas conformaciones familiares, estarían apalancando esta tendencia.",
                "uri": "app.pages.tendencias"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "De acuerdo al último informe de Toc Toc, la composición de los proyectos disponibles para la venta a noviembre de 2018, en términos de unidades, es de 84% departamentos y 16% casas.",
                "uri": "app.pages.tendencias"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "Proyectos y Nuevas Etapas por comunas de la Reg. Metropolitana Diciembre 2018",
                "uri": "app.pages.tendencias"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "Meses para agotar stock (MAS). Son las comunas tradicionalmente ABC1 las que presentan niveles de indicador “MAS” por sobre lo razonable, situación que podría llegar a generar, en estos mercados específicos, liquidación de stocks, promociones y guerras de precios que afecten los márgenes del negocio.",
                "uri": "app.pages.tendencias"
            },
            {
                "titulo": "Tendencias 2018 de la industria",
                "parrafo": "Nivel de precios. A fines del primer semestre de 2018 los precios volvieron a retomar su tendencia alcista de los últimos años, situación que debiese mantenerse producto de una alta concentración de la demanda en zonas densificadas, cambios tributarios como el IVA a la construcción y el mayor impuesto a la renta, la nueva ley de mitigaciones y aportes al espacio público, entre otros.",
                "uri": "app.pages.tendencias"
            }
        ]
    

    $rootScope.share = share;
    $rootScope.openSearch = openSearch;
    $rootScope.download= download;

    function openSearch(){
        console.log("open search")
        $rootScope.isOpenSearch = true;
    }

    function closeFind(){
        $rootScope.isOpenSearch = false;
    }

    function download(url){
        window.open('./assets/pdf/'+url,'_blank');
    }
    function share($event) {
      $event.stopPropagation();
      var facebookWindow = window.open(
        'https://www.facebook.com/sharer/sharer.php?u=' + document.URL,
        'facebook-popup',
        'height=350,width=600'
      );
      if (facebookWindow.focus) {
        facebookWindow.focus();
      }
      return false;
    }

    function changeValue(){
        console.log("change")
    }

    function search() {

    }

    function close() {
      $rootScope.isOpen = false;
    }
    function closeSearch(){
        $rootScope.isOpenSearch = false;
    }
    // Remove the splash screen
    $scope.$on('$viewContentAnimationEnded', function(event) {
      if (event.targetScope.$id === $scope.$id) {
        $rootScope.$broadcast('splashScreen::remove');
      }
    });
  }
})();
