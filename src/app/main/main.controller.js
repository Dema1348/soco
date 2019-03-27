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
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "El 2018 Empresas Socovesa inició un proceso interno de modernización el cual viene a sostener una nueva forma de diseñar, construir, vender y relacionarse con el entorno, buscando de esta manera, fortalecer sus fundamentos de crecimiento para los próximos años. Este proceso llevó a la Compañía a formalizar su propósito, pilares estratégicos, y principios culturales y a trazar el camino que le permitirá consolidarse como una empresa de diseño centrada en el habitar.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Aprovechando su sólida posición financiera y teniendo claros los desafíos futuros que enfrenta la industria inmobiliaria, Empresas Socovesa inició el 2018 el proceso de modernización organizacional más importante de su historia reciente a través del cual busca consolidarse como una sola gran empresa de diseño, centrada en el habitar de las personas.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Esta decisión de cambio responde a varias razones, siendo la más significativa, fortalecer la generación de rentabilidades atractivas para la Compañía, adaptándose mejor al nuevo entorno urbano y de negocios.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "En concreto, transitar hacia una empresa de diseño significa fortalecer aún más el foco en el cliente, potenciar el desarrollo de productos más conectados con sus necesidades, contar con equipos de trabajo más especializados, métodos de trabajo colaborativos, transferir mejores prácticas y atraer y retener al mejor talento.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Los cambios organizacionales se materializaron con el apoyo de una consultora externa, experta en procesos adaptativos, la que además de entregar apoyo a cada una de las áreas intervenidas, facilitó la definición de un nuevo relato corporativo para Empresas Socovesa y sus marcas.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Ser una empresa de diseño centrada en el habitar. Si miramos la historia de Empresas Socovesa, el diseño ha estado presente en el desarrollo de cada departamento y cada casa que ha construido. Sin embargo, durante los últimos 7 años, la Compañía fue transitando hacia un nuevo entendimiento del diseño donde éste dejó de ser una función limitada a solo un área de la Compañía para pasar a estar en el centro de la estrategia del negocio.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "El diseño, como Empresas Socovesa lo entiende actualmente, integra conocimientos y disciplinas -como la arquitectura, la ingeniería y las ciencias sociales-, exige métodos de trabajo más colaborativos y pone el conocimiento del consumidor al servicio del desarrollo de productos que solucionen –funcional, estética y emocionalmente hablando- las múltiples necesidades del habitar de las personas.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Esta relevancia que se le da al diseño, representa una nueva forma de entender el negocio inmobiliario, donde el valor ya no está solo en la tierra sino también, y con mayor acento, en el producto.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Finalmente, la Compañía trabajó en la definición y formalización de su propósito, el cual responde a la pregunta de para qué hacemos lo que hacemos. Es así como se acordó que el propósito compartido de Empresas Socovesa es \"mejorar la vida de las personas, diseñando y construyendo espacios de calidad\" y que ese propósito debía sostenerse en una cultura compartida entre todos.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Fue entonces cuando, a través de un proceso consultivo donde participaron casi 500 personas, se levantaron distintos atributos representativos de la cultura de cada una de las filiales del Grupo, logrando identificar 8 principios comunes. Estos 8 principios se denominaron “Nuestros Cimientos”.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Trabajo colaborativo. La Compañía y sus personas son llamadas a mirar los resultados globales más allá de los objetivos individuales y a integrar distintas visiones para mejores resultados.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Poner al cliente en la conversación. Nuestro negocio comienza y termina en el cliente. Es por eso que la Compañía decide fortalecerse en su capacidad de poner al cliente y sus necesidades al centro de todas las decisiones organizacionales.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Observar el entorno. Sostener el liderazgo en la industria inmobiliaria requiere de una mirada amplia y una perspectiva sistémica de los distintos factores que influyen en el negocio inmobiliario.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Buscar y aceptar nuevas miradas. Hacer las cosas mejor, implica salirse de la zona de comodidad y experimentar nuevas formas de enfrentar los desafíos. Es incorporar distintos puntos de vista y valorar la diversidad de opiniones, poniéndolas al servicio de un mejor resultado.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Preocupación por las personas. Somos una compañía que reconoce la contribución y el esfuerzo adicional del equipo en su trabajo. Buscamos que nuestras personas perciban el valor que cada uno le aporta al negocio.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Comunicación oportuna. Un equipo alineado a la visión -\"Convertirnos en una empresa de diseño\"-, a la estrategia y a los objetivos de la compañía, genera un efecto multiplicativo sobre los resultados.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Jugar limpio. Con más de 50 años liderando la industria inmobiliaria, Empresas Socovesa siempre ha puesto la ética en el centro de su gestión, tanto en los negocios, en las relaciones entre las áreas y con todos los grupos de interés con los que se relaciona.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Si hay talento, se potencia. Valoramos a las personas que se fijan metas ambiciosas y que son apasionadas por alcanzarlas.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Durante el 2018, la Compañía dio inicio a distintos ajustes y movimientos dentro de su estructura organizacional. Conceptualmente hablando, estos cambios buscan fortalecer la capacidad de las marcas de diseñar centradas en las personas y vender valor inmobiliario.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "La mayor especialización de Socovesa Santiago, Socovesa Sur, Almagro y Pilares, va de la mano y se sostiene en áreas corporativas de apoyo que se han fortalecido, con nuevas funciones de soporte para el negocio.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "El primer paso en esta dirección fue la fusión del departamento de Arquitectura, área que ahora presta servicios a todas las filiales del Grupo aprovechando así el conocimiento y las habilidades que tiene este equipo en todos los proyectos de las filiales.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "La Compañía seguirá realizando cambios durante el año 2019-2020 en miras de ir consolidando esta modernización organizacional.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Asimismo, el área de Operaciones Comerciales pasó a manejarse centralizadamente. Lo anterior implicó que todo el proceso de preparación del cliente para suscribir la escritura de compraventa y en definitiva, concretar la compra de su vivienda, hoy se hace a través de un solo equipo que depende de la Gerencia de Finanzas Corporativas de Empresas Socovesa.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Nuevo edificio Corporativo. Enmarcado en este proceso, el Directorio y la Administración decidieron que, en un horizonte de aproximadamente 5 años, a contar del 01 de enero de 2019, tanto la matriz como todas sus filiales, con excepción de la filial Socovesa Sur, tendrán sus oficinas en un mismo edificio corporativo ubicado en la ciudad de Santiago.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Desafío de modernización",
            "parrafo": "Este hecho constituye la materialización de la idea de ser una sola gran empresa y permitirá potenciar aún más la colaboración y el trabajo multidisciplinario, aspectos determinantes en el diseño de buenos productos inmobiliarios.",
            "uri": "app.pages.modernizacion"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Empresas Socovesa proyecta para el año 2019 que las promesas de negocios debieran crecer un 1% y la facturación un 14%. Para los años 2019-2021, se visualiza un periodo de crecimiento que redunda en un volumen de promesas y facturación en el entorno de los UFMM 16,3.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Promesas y facturación. Para el año 2019 la Compañía proyecta un crecimiento en promesas netas de negocios del 1%, llegando a los MMUF 13,2. Esta proyección considera un nivel de actividad prácticamente estable en relación al año 2018 para Socovesa, un crecimiento del 16% para Almagro y un decrecimiento de Pilares del 14%, ya que esta filial no presupuesta nuevas ventas a inversionistas institucionales (situación que se materializó durante el ejercicio 2018).",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Si se aísla esta venta institucional de las cifras del 2018, Pilares estaría creciendo un 7% el año 2019 y el área inmobiliaria de Empresas Socovesa, un 5%.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Entre los años 2019 y 2021, Empresas Socovesa proyecta un ciclo de crecimiento sostenido tanto en promesas netas como así también en términos de facturación de viviendas nuevas. Para finales del 2021, la Compañía estima alcanzar un volumen de venta (promesas netas de negocio) de MMUF 16,8 y un nivel de ingresos por venta de viviendas nuevas del mismo orden, en el entorno de los MMUF 16,3.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Por su parte, para el año 2019, se proyecta un crecimiento en torno al 14% en términos de facturación de viviendas nuevas.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Estrategia de crecimiento y lanzamiento de nuevos proyectos. El logro de los anteriores niveles de promesas y facturación ha supuesto acelerar el ritmo de negocios, proceso que se inició hace 18 meses, anticipándose así al nuevo ciclo económico de crecimiento moderado. En ese minuto, los niveles de inversión en tierra pasaron de MMUF 1,5 al año a MMUF 2,5.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Para el ejercicio 2019 el plan de compra de terrenos contempla la adquisición de tierra, principalmente para el desarrollo de proyectos en altura, por un monto total equivalente a MMUF 3,8. Este monto incluye el pago de compras de terrenos que se acordaron el año 2018.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Respecto al plan de lanzamientos de proyectos, para el año 2019 se contempla el inicio de la construcción de 5.066 unidades, por un monto total de venta de MMUF 15,7 y con una inversión estimada de MMUF 9,4.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Por su parte, la oferta promedio creció MMUF 0,3 durante el 2018 y se espera que crezca MMUF 1,6 durante el 2019 proyectando tener un nivel de oferta promedio para el ejercicio 2019 de MMUF 17.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Proyecciones y plan de inversiones",
            "parrafo": "Meses para agotar stock. Los niveles de MAS (meses para agotar stock) se han mantenido equilibrados, en un rango que va entre los 15 a 17 meses, a pesar de los diferentes ciclos económicos -niveles de oferta y velocidades de venta- experimentados entre los años 2013 y 2019.",
            "uri": "app.pages.proyecciones"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Durante el año 2018, la Compañía trabajó en la definición y formalización no solo de su propósito, el cual responde a la pregunta de por qué hacemos lo que hacemos, sino también de los principios o valores que fundan el que hacer de Empresas Socovesa.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Javier Gras es Diplomado en Control y Gestión de Ventas de la Universidad de Chile y ha estado relacionado con el negocio inmobiliario gran parte su vida. Fue testigo del nacimiento, crecimiento y expansión de la compañía que fundó Eduardo Gras Díaz en 1965, y hace más de 25 años está vinculado formalmente a Socovesa.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Justino Negrón es Contador General y está ligado a la Compañtía desde su fundación en 1965. Es Director de Empresas Socovesa desde su apertura en Bolsa en 2007.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Abogado de la Facultad de Derecho de la Universidad de Chile y socio fundador del estudio jurídico Barros & Errázuriz Abogados. Su área de expertise es el derecho tributario, derecho de la competencia, corporativo, M&A, mercado de valores e inmobiliario.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Abogado de la Pontificia Universidad Católica de Chile con especialización en el área económica de la Westfälische W. Universität (Alemania). Es también Director Ejecutivo de la Asociación de Desarrolladores Inmobiliarios A.G (ADI) y director de empresas de rubros inmobiliario, turismo, educación, farmacéutico y servicios sanitarios.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Ingeniero Comercial de la Pontificia Universidad Católica de Chile y MBA de la Universidad de Chicago (Estados Unidos). Es director y asesor en varias empresas pertenecientes a los rubros inmobiliario, financiero, seguros, administración de inversiones y family office. En el ámbito académico, ha sido profesor de la Facultad de Economía y Administración de la Universidad de Chile.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Constructor Civil y MBA en Finanzas y Gerencia Internacional. Cuenta con gran experiencia en finanzas, en el rubro inmobiliario y de la construcción. Presidente Ejecutivo de la Viña Montgras y de la Agrícola Mollendo, mayor empresa nacional de exportación de carne premium.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Equipo",
            "parrafo": "Ingeniero Comercial de la Universidad de Chile, es consultor de varias empresas del sector público y privado, nacionales y extranjeras. Actualmente es Gerente General de Gemines, empresa dedicada a la asesoría en economía y finanzas, con una alta especialización en el análisis del mercado inmobiliario y la proyección de variables claves de la economía.",
            "uri": "app.pages.equipo"
        },
        {
            "titulo": "Resultados por marcas",
            "parrafo": "Durante el 2018, el equipo Almagro fortaleció su capacidad de diseñar productos centrados en las necesidades de sus clientes, con procesos más multidisciplinarios y colaborativos, al mismo tiempo que profundizó en su modelo de venta de valor. La marca generó utilidades por MUF 849, con un margen bruto de viviendas nuevas de 31,9%",
            "uri": "app.pages.marcas"
        },
        {
            "titulo": "Resultados por marcas",
            "parrafo": "Almagro, el mayor desarrollador en altura de la Región Metropolitana, durante el año 2018 trabajó en el fortalecimiento de su proceso de diseño de producto, al mismo tiempo que profundizó en la comunicación de los atributos diferenciales en cada uno de sus proyectos. Lo anterior se resume en que el cliente logre ver el valor de lo diseñado y que esté dispuesto a pagar por un producto superior.",
            "uri": "app.pages.marcas"
        },
        {
            "titulo": "Resultados por marcas",
            "parrafo": "Otro hecho relevante del año fue la consolidación de la marca en comunas como Santiago y Ñuñoa, trayendo el estándar Almagro, tradicionalmente presente en los segmentos alto y lujo, al segmento C2. Es así como el 2018, los proyectos en el rango de las UF2.001 y UF 4.000, llegaron a representar un 40% del portafolio de la marca. Dentro de estos, destacan los edificios General Mackenna - en Santiago Centro- , y Bustamante -en Ñuñoa- y simbolizan lo mejor de la calidad y performance de Almagro.",
            "uri": "app.pages.marcas"
        },
        {
            "titulo": "Resultados por marcas",
            "parrafo": "Lo anterior se resume en que el cliente logre ver el valor de lo diseñado y que esté dispuesto a pagar por un producto mejor.",
            "uri": "app.pages.marcas"
        },
        {
            "titulo": "Resultados por marcas",
            "parrafo": "Finalmente, se destaca la inauguración de los departamentos piloto del edificio Porto Alegre de Antofagasta, ciudad donde Almagro mantiene una presencia de casi 30 años. Este edificio, ubicado en el sector Parque Brasil, se convertirá en un ícono para la ciudad por su propuesta de diseño, espacio y metrajes.",
            "uri": "app.pages.marcas"
        },
        {
            "titulo": "Resultados por marcas",
            "parrafo": "En términos de resultados, durante el año 2018 las promesas netas de compraventa crecieron un 1% con respecto al año anterior, alcanzando MUF 4.593. Asimismo, la facturación de viviendas nuevas generó ingresos por MUF 4.409, con un margen bruto de viviendas nuevas de 31,9%.",
            "uri": "app.pages.marcas"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "El crecimiento urbano que han experimentado las principales ciudades de Chile, constituye uno de los fenómenos sociales, económicos y políticos más estudiados y controvertidos del último tiempo. Promover la filosofía de la densificación equilibrada dentro de la discusión gremial y el diálogo permanente con las comunidades, fueron las principales avenidas de trabajo de Empresas Socovesa durante el 2018.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Densificación equilibrada: el aporte de Empresas Socovesa la discusión gremial. Las tensiones frente al desarrollo han aumentado de forma considerable los últimos años. En particular, durante el 2018, el tema cobró mayor interés dentro de la opinión pública tras los permanentes cuestionamientos a una densificación desmedida y la posterior paralización de proyectos inmobiliarios.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Mientras, en la Asociación de Desarrolladores Inmobiliarios (ADI) hace ya tres años que se estudiaba la forma de darle mayor legitimidad al negocio, aumentar la certeza jurídica y promover un desarrollo urbano más sostenible y armónico. Esta discusión se instaló con fuerza en el gremio, especialmente tras el cambio de la presidencia de la ADI que fue asumida por Mauricio Varela, gerente general de Empresas Socovesa, el 2017.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Esta nueva mirada se instaló junto con el cambio de liderazgo al interior de la ADI que, a partir del 2017, fue asumido por Mauricio Varela, gerente general de Empresas Socovesa.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Bajo esta nueva administración se determinó, en conjunto con todos los participantes del gremio, que los 4 ejes de trabajo para la ADI de cara a los próximos años, serían el estudio de una nueva gobernanza urbana, impulsar la densificación equilibrada como modelo de crecimiento, la participación ciudadana como método vinculante y fomentar una mayor transparencia en el mercado financiero. De estas 4 líneas de acción y bajo consenso interno, la ADI definió que el mayor acento estaría en promover la densificación equilibrada como la alternativa más viable y legítima de desarrollo urbano.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Mirando en retrospectiva, el 2017 fue el año en que la ADI logró posicionar el concepto de densificación equilibrada dentro de la agenda gremial y política. Ya el 2018 la discusión cambia de escala y alcance, al incluirse por primera vez en la historia, una mesa de trabajo pro densificación equilibrada dentro del plan del Consejo Nacional de Desarrollo Urbano. Mauricio Varela, como presidente de la ADI, fue invitado a integrar este grupo del CNDU.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "La presentación de un proyecto de ley de integración social y territorial vía densificación equilibrada por parte del propio Presidente Sebastián Piñera y el Ministro de Vivienda y Urbanismo, Cristián Monckeberg, es el ejemplo más claro de los resultados del trabajo de esta mesa del CNDU.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Este primer proyecto de ley constituye un hito trascendental para el gremio y también para Empresas Socovesa, que como actor privado, fue el pionero en estudiar y acuñar este concepto el 2015, y que, desde entonces, está generando más y nuevas propuestas para fortalecer los procesos de densificación equilibrada en las grandes zonas urbanas de Chile.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Comunidad y vinculación con el entorno. Uno de los acentos fundamentales del desarrollo sostenible en Empresas Socovesa está en la construcción de vínculos con las comunidades que permitan una relación virtuosa entre la empresa y su entorno.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "El diálogo es una herramienta y un método poderoso para lograr este objetivo. A través de la socialización temprana de proyectos inmobiliarios, la instalación de mesas de trabajo, programas preventivos para mitigar las externalidades negativas de la construcción y la búsqueda de soluciones conversadas con los vecinos, Empresas Socovesa ha logrado establecer vínculos positivos y de confianza con gran parte de las comunidades de sus proyectos. Al 2018, la empresa solo registró un caso en sede judicial en un universo de más de 100 proyectos y nuevas etapas en ejecución.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Para fortalecer su capacidad de vinculación con las comunidades, durante el 2018 la Compañía generó alianzas con distintas organizaciones como Gestión Social, Casa Parque y Techo Chile, las que se han transformado en casos de éxito para la Compañía.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "El proyecto La Hacienda en Renca tiene la característica de ser un barrio mixto, es decir, en una misma zona convive lo residencial con lo industrial.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Frente a esto, el primer objetivo que se planteó Socovesa Santiago, fue lograr una convivencia armónica entre las dos partes, co-diseñando soluciones que minimizaran las externalidades negativas de esta coexistencia.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Junto a la Municipalidad de Renca y a la Junta de Vecinos, en octubre del 2016 se firmó un acuerdo que habló de 3 medidas concretas que aportaran al mejor vivir de la comunidad: la construcción de un Centro Comunitario, mejoras viales que resguarden tanto la seguridad como la calidad de vida de las personas y por último, el mejoramiento de la infraestructura deportiva.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "En estos 2 años, no sólo se han concretado los objetivos anteriores casi en su totalidad, sino que la filial ha trabajado de la mano con la comunidad renquina en cada uno de esos objetivos, con el apoyo de la consultora Gestión Social. Con ellos se ha venido acompañando y guiando a la comunidad para que adquiera la capacidad de autogestionar tanto del Centro Comunitario como otros proyectos existentes, entre otras acciones destacadas.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "El 2018 se terminó un proyecto que consiste en un mural en las torres del Centro Comunitario, el que fue pintado por un artista local y que retrata parte de la historia de la comuna y del barrio. Este mural es hoy un orgullo para los vecinos.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Integración Social. Durante el 2018, Socovesa Santiago y Techo Chile trabajaron conjuntamente en un plan de convivencia comunitaria dirigido a las familias que co-habitan en los proyectos de integración social DS19.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "El programa llamado “Activa tu Barrio” ha permitido que muchas familias se conozcan antes de mudarse definitivamente al nuevo proyecto, contribuyendo a una mayor cercanía entre vecinos.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Una de las iniciativas más valoradas durante el 2018 fueron las charlas sobre cómo vivir en comunidad. En cada una de ellas, se les entregó apoyo enseñándoles temas de copropiedad, qué implica vivir en un condominio, aspectos legales de cómo se constituye la administración de los mismos, sus derechos y deberes, cuáles son los bienes de uso común, entre otros temas.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Para fortalecer el aprendizaje, se realizaron talleres con juegos de roles donde se pusieron a prueba las herramientas que se les enseñó en la fase teórica.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "El programa Activa tu Barrio se realizó en los proyectos Cerro Negro B, Prados de Santa Clara IV y Las Pataguas I y II.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Fue hace 4 años cuando un grupo de jóvenes, hoy Corporación Cultural Casa Parque, se acercó a Almagro para presentar un proyecto donde solicitaban a la inmobiliaria la activación de una de sus propiedades para la creación de un programa cultural para la comunidad.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Esta propiedad, mientras esperaba ser demolida para un nuevo edificio, estaría en manos de dicha agrupación para ser utilizada en beneficio de los vecinos.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "De esta manera, este grupo de jóvenes, con el apoyo de Almagro, creó Casa Parque Villaseca: un espacio de historia recuperado para la cultura, y que invita a la comunidad a realizar diferentes actividades en torno al arte, el deporte y la música. “Este centro cultural se pudo llevar a cabo gracias a la buena voluntad de Almagro. Fuimos una especie de puente entre la inmobiliaria y la comunidad”, explica Diego Encina, presidente de la Corporación.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "Desde la activación de la casa en 2014 y hasta el 2018, se arrendaron continuamente 6 espacios de trabajo, que contaron con más de 25 residentes de diversas disciplinas.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Sostenibilidad",
            "parrafo": "En este mismo período se realizaron 105 eventos abiertos a la comunidad, incluyendo encuentros, ferias, exposiciones de arte, música, danza, literatura, cine y teatro, además de actividades participativas. A estos asistieron cerca de 5.300 personas, con un promedio de 51 por evento y 1.340 por año. Asimismo, CPV ha acogido más de 9 talleres permanentes, con clases semanales de karate, Yoga Ashtanga, Chi Kung, entre otros, con más de 3.000 asistencias totales.",
            "uri": "app.pages.sostenibilidad"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Facilitar y fortalecer la entrega de una educación de calidad, es el foco estratégico de la política de responsabilidad social de Empresas Socovesa y se materializa, fundamentalmente, a través del apoyo a la Corporación Educacional Emprender.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "La relación de cooperación entre Empresas Socovesa y Emprender se remonta al menos al 2013 cuando entre ambas organizaciones lanzan un Fondo de Becas el cual permitió que decenas de alumnos, a pesar de sus problemas económicos, pudiesen continuar con su plan de estudios, evitando la deserción escolar.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Junto con este sistema de financiamiento, se realizaron también actividades grupales de voluntariado, orientadas al mejoramiento de la infraestructura de los colegios, las que a pesar del esfuerzo, carecían de continuidad y se llevaban a cabo esporádicamente, como respuesta a necesidades puntuales de la Corporación. Estas iniciativas fueron el puntapié inicial para definir una política de Responsabilidad Social de Empresas Socovesa que apalancara los objetivos de la Corporación y que fortaleciera el rol social de la Compañía.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Esto se tradujo el 2017 en la firma de un Acuerdo Marco entre ambas instituciones, y el lanzamiento del primer programa oficial de Voluntariado Corporativo.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Este programa que contempla 6 formas distintas de apoyo a la Corporación terminó de ejecutarse totalmente durante el 2018 cerrando exitosamente su primer año de operación con la participación de XXX voluntarios y beneficiando en total a XXX alumnos y sus familias.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Fondos becas 1+1: Durante el 2018 y gracias al esfuerzo conjunto de los empleados de la Compañía con Empresas Socovesa, se donaron a Emprender $ XXX, lo que se tradujo en que XXX familias pudieron darle continuidad a los estudios de sus hijos, a pesar de sus dificultades económicas.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Fondo de emprendimiento: Cuatro de los ocho proyectos de emprendimiento escolar que recibieron financiamiento el 2017, lograron superar la primera etapa de desarrollo, pasando de la ideación, a la ejecución de la idea de negocio. El éxito de estos proyectos, entre los que se cuenta una panadería en Puente Alto y una empresa de poleras personalizadas, radicó en gran parte, en las asesorías que los voluntarios dedicaron a cada iniciativa durante el 2018.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Coaching vocacional: Se trata de mentorías individuales para guiar a los alumnos de tercero medio en la elección de su futura carrera técnica o profesional. En este caso, fueron 12 alumnos que, apoyados por 12 colaboradores, pudieron avanzar en esa difícil decisión. Se trató de una de las iniciativas más valoradas por los alumnos y por el equipo interno, especialmente por la posibilidad de conocer nuevas realidades, por la experiencia de vivir un día de trabajo dentro de Empresas Socovesa, y por el vínculo y cercanía que se generó entre ellos.",
            "uri": "app.pages.compromisos"
        },
        {
            "titulo": "Compromiso con la Educación",
            "parrafo": "Conversatorios en Inglés: Una vez al mes y durante todo el año, un grupo de estudiantes de Lampa y Puente Alto se reunió cada lunes a conversar en inglés y por una hora sobre distintos temas de interés, mejorando su capacidad de comunicarse en ese idioma. Además de fortalecer las habilidades comunicativas de los alumnos, fue una oportunidad para discutir sobre fenómenos que están marcando la agenda social, como el bullying escolar, las redes sociales o la inmigración.",
            "uri": "app.pages.compromisos"
        }
    ]
    

    $rootScope.setShareLinks=setShareLinks;
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
    
    function socialWindow(url,$event) {
        if($event){
            $event.stopPropagation();
        }
        var left = (screen.width - 570) / 2;
        var top = (screen.height - 570) / 2;
        var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
        window.open(url,"NewWindow",params);
      }

      function setShareLinks(type) {
	  	var pageUrl = encodeURIComponent(document.URL);
	  	var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));
      
        if(type=="facebook"){
            var url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
            socialWindow(url);
        }

        if(type=="twitter"){
            var  url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
            socialWindow(url);
        }
       
        if (type == "linkedin") {
            var url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
            socialWindow(url);
        }
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
