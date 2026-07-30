import { useTranslation } from 'react-i18next';

export function PrivacyPolicy() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    const content = {
        pt: {
            title: "Política de Privacidade",
            lastUpdate: "Última atualização: 29 de julho de 2026",
            sections: [
                {
                    title: "1. Introdução",
                    content: "Bem-vindo ao Bible Planner! Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso aplicativo (disponível para Android, iOS, Web e Desktop) e nosso site. O Bible Planner é desenvolvido pela PI Software LTDA (\"nós\", \"nosso\"). Ao usar o App, você concorda com a coleta e uso de informações de acordo com esta Política."
                },
                {
                    title: "2. Informações que Coletamos",
                    subsections: [
                        {
                            title: "2.1 Dados de Conta (Ao Fazer Login)",
                            content: "Fazer login é opcional — a maior parte dos recursos funciona sem conta. Se você optar por entrar com sua conta Google ou Apple (via Supabase Auth), coletamos:",
                            list: [
                                "Nome e endereço de e-mail associados à sua conta Google ou Apple",
                                "Foto de perfil (se disponibilizada pelo provedor de login)",
                                "Provedor de autenticação utilizado e data/hora dos seus logins",
                                "Nome de exibição e foto de perfil personalizados, caso você opte por editá-los no App (a foto enviada por você é armazenada em nosso serviço de armazenamento em nuvem, Supabase Storage)"
                            ]
                        },
                        {
                            title: "2.2 Dispositivos Conectados e Sincronização",
                            content: "Quando você faz login, o Bible Planner permite gerenciar os dispositivos conectados à sua conta na tela 'Detalhes da Conta'. Para isso, armazenamos:",
                            list: [
                                "Nome e modelo do dispositivo",
                                "Data do último login em cada dispositivo",
                                "Localização aproximada (cidade e país) do dispositivo, estimada a partir do endereço IP no momento do login — não coletamos localização GPS precisa"
                            ]
                        },
                        {
                            title: "2.3 Dados de Uso do Aplicativo",
                            content: "O Bible Planner armazena as seguintes informações relacionadas ao seu uso do aplicativo:",
                            list: [
                                "Progresso de Leitura: status de leitura de livros, capítulos e versículos da Bíblia",
                                "Notas Pessoais: anotações que você cria nos dias do plano de leitura",
                                "Favoritos e Preferências: livros favoritados, plano de leitura selecionado, tema visual, cores dinâmicas (Material You) e idioma"
                            ]
                        },
                        {
                            title: "2.4 Estudo Diário com IA (Recurso Pro)",
                            content: "Ao utilizar o recurso de Estudo Diário com Inteligência Artificial, enviamos a passagem bíblica, a versão e o idioma selecionados para nosso servidor, que utiliza um serviço de IA de terceiros para gerar o conteúdo devocional exibido a você. Usuários no plano gratuito têm um número limitado de estudos com IA por período; assinantes Pro têm acesso ampliado."
                        },
                        {
                            title: "2.5 Dados de Assinatura (Opcional)",
                            content: "Se você optar por assinar o Bible Planner Pro, as transações são processadas através da Apple App Store ou Google Play Store. Utilizamos o RevenueCat para gerenciar o status da sua assinatura.",
                            list: [
                                "Não coletamos nem armazenamos detalhes de pagamento ou cartões de crédito.",
                                "Apenas recebemos confirmação de que sua assinatura está ativa para desbloquear recursos Pro.",
                                "Na versão Desktop, a compra é concluída em uma página de checkout na web operada pela RevenueCat, aberta no navegador do seu sistema; um identificador anônimo (não vinculado à sua identidade) é armazenado localmente no seu computador para associar a compra à sua assinatura."
                            ]
                        },
                        {
                            title: "2.6 Dados de Analytics e Diagnóstico",
                            content: "Utilizamos o Firebase Analytics, Firebase Crashlytics, Firebase Remote Config (Android e iOS), Firebase Performance Monitoring (iOS), o Google Analytics 4 (versão Desktop) e o Sentry (relatório de falhas na versão Desktop) para entender como o App é utilizado, identificar falhas e melhorar sua experiência. Isso inclui:",
                            list: [
                                "Telas visitadas e ações realizadas no App (ex: concluir um dia de leitura, abrir um plano)",
                                "Relatórios de erros e falhas do aplicativo",
                                "Informações técnicas do dispositivo: modelo, sistema operacional, versão do App, idioma e tema",
                                "Se você é assinante Pro (sem detalhes da assinatura) — usado apenas para segmentar métricas de uso",
                                "Esses dados são tratados de forma agregada e, na maioria dos casos, não são vinculados diretamente ao seu nome ou e-mail"
                            ]
                        },
                        {
                            title: "2.7 Dados que NÃO Coletamos",
                            content: "O Bible Planner NÃO coleta:",
                            list: [
                                "Informações de contatos do seu dispositivo",
                                "Histórico de navegação de outros aplicativos ou sites",
                                "Dados biométricos (impressão digital, reconhecimento facial)",
                                "Localização GPS precisa",
                                "Informações financeiras diretas (processadas exclusivamente pelas lojas de aplicativos)"
                            ]
                        }
                    ]
                },
                {
                    title: "3. Como Utilizamos suas Informações",
                    content: "Utilizamos as informações coletadas para:",
                    list: [
                        "Manter e sincronizar seu progresso de leitura, notas e preferências entre dispositivos",
                        "Autenticar sua conta e permitir o gerenciamento de dispositivos conectados",
                        "Gerar o conteúdo do Estudo Diário com IA que você solicita",
                        "Processar e validar assinaturas Pro",
                        "Entender como o App é utilizado, corrigir falhas e priorizar melhorias",
                        "Cumprir obrigações legais, quando aplicável"
                    ]
                },
                {
                    title: "4. Armazenamento e Transferência de Dados",
                    subsections: [
                        {
                            title: "4.1 Armazenamento Local",
                            content: "Seu progresso de leitura, notas e preferências são sempre armazenados localmente no seu dispositivo, usando Room Database e DataStore. Se você não fizer login, esses dados permanecem apenas no seu dispositivo."
                        },
                        {
                            title: "4.2 Sincronização na Nuvem (Ao Fazer Login)",
                            content: "Ao fazer login, seus dados de progresso, favoritos e a lista de dispositivos conectados também são armazenados em nosso banco de dados na nuvem, hospedado pelo Supabase, para permitir sincronização entre dispositivos. Os servidores utilizados por nossos provedores (Supabase e Firebase/Google) podem estar localizados fora do Brasil; nesses casos, adotamos os cuidados exigidos pela legislação aplicável para proteger seus dados em transferências internacionais."
                        },
                        {
                            title: "4.3 Retenção de Dados",
                            content: "Mantemos seus dados de conta enquanto ela estiver ativa. Se você solicitar a exclusão da sua conta, apagamos ou anonimizamos seus dados pessoais em prazo razoável, exceto quando a retenção for exigida por lei."
                        }
                    ]
                },
                {
                    title: "5. Compartilhamento de Dados e Serviços de Terceiros",
                    content: "O Bible Planner não vende seus dados. Compartilhamos informações apenas com prestadores de serviço necessários para o funcionamento do App:",
                    list: [
                        "Supabase: autenticação de conta, banco de dados na nuvem, armazenamento de arquivos (foto de perfil), sincronização em tempo real e geração de conteúdo do Estudo com IA",
                        "Firebase (Google): analytics, relatório de falhas (Crashlytics) e configuração remota de recursos",
                        "Sentry: relatório de falhas na versão Desktop do App",
                        "RevenueCat: gerenciamento e validação de assinaturas (na versão Desktop, processamento de pagamento via checkout na web)",
                        "Google Sign-In e Sign in with Apple: autenticação de conta",
                        "Lojas de Aplicativos (Apple/Google): processamento de pagamentos"
                    ]
                },
                {
                    title: "6. Seus Direitos (LGPD)",
                    content: "De acordo com a Lei Geral de Proteção de Dados (LGPD) e legislações de privacidade aplicáveis, você tem o direito de:",
                    list: [
                        "Confirmar a existência de tratamento dos seus dados",
                        "Acessar, corrigir ou atualizar seus dados",
                        "Solicitar a exclusão ou anonimização dos seus dados pessoais",
                        "Solicitar a portabilidade dos seus dados",
                        "Revogar seu consentimento a qualquer momento",
                        "Obter informações sobre com quem seus dados são compartilhados"
                    ]
                },
                {
                    title: "7. Exclusão de Conta e Dados",
                    content: "Atualmente, a exclusão de conta deve ser solicitada diretamente à nossa equipe. Para excluir sua conta e os dados sincronizados na nuvem (incluindo dados de dispositivos conectados), entre em contato pelo e-mail quare.software@gmail.com informando o e-mail utilizado no login. Processaremos sua solicitação em prazo razoável. Você também pode apagar o progresso armazenado localmente diretamente pelo App, sem necessidade de contato."
                },
                {
                    title: "8. Privacidade de Crianças",
                    content: "O Bible Planner não é direcionado a crianças menores de 13 anos e não coletamos intencionalmente dados pessoais de crianças nessa faixa etária. Se tomarmos conhecimento de que coletamos dados pessoais de uma criança sem o consentimento dos pais ou responsáveis, tomaremos medidas para excluir essas informações."
                },
                {
                    title: "9. Segurança",
                    content: "Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado, perda ou alteração. No entanto, nenhum método de transmissão ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta."
                },
                {
                    title: "10. Alterações a esta Política",
                    content: "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças no App ou em requisitos legais. A data de 'Última atualização' no topo desta página indica a versão mais recente. Recomendamos revisar esta página regularmente."
                },
                {
                    title: "11. Contato",
                    content: "Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos de privacidade, entre em contato conosco pelo e-mail quare.software@gmail.com."
                },
                {
                    title: "Resumo",
                    content: "O Bible Planner funciona offline para o progresso básico de leitura, mas oferece login opcional (Google/Apple) para sincronizar seus dados entre dispositivos e desbloquear o Estudo Diário com IA. Ao fazer login, coletamos seu nome, e-mail, foto de perfil e a localização aproximada dos dispositivos conectados à sua conta. Utilizamos Firebase e Google Analytics para entender o uso do App. Não vendemos seus dados nem exibimos anúncios. Você pode solicitar a exclusão da sua conta e dos seus dados a qualquer momento pelo e-mail quare.software@gmail.com.",
                    highlight: true
                }
            ]
        },
        en: {
            title: "Privacy Policy",
            lastUpdate: "Last updated: July 29, 2026",
            sections: [
                {
                    title: "1. Introduction",
                    content: "Welcome to Bible Planner! This Privacy Policy explains how we collect, use, store, and protect your information when you use our application (available on Android, iOS, Web, and Desktop) and our website. Bible Planner is developed by PI Software LTDA (\"we\", \"us\", \"our\"). By using the App, you agree to the collection and use of information in accordance with this Policy."
                },
                {
                    title: "2. Information We Collect",
                    subsections: [
                        {
                            title: "2.1 Account Data (When You Sign In)",
                            content: "Signing in is optional — most features work without an account. If you choose to sign in with Google or Apple (via Supabase Auth), we collect:",
                            list: [
                                "Name and email address associated with your Google or Apple account",
                                "Profile photo (if provided by the sign-in provider)",
                                "Authentication provider used and the date/time of your sign-ins",
                                "A custom display name and profile photo, if you choose to edit them in the App (a photo you upload is stored in our cloud storage service, Supabase Storage)"
                            ]
                        },
                        {
                            title: "2.2 Connected Devices and Sync",
                            content: "When you sign in, Bible Planner lets you manage devices connected to your account on the 'Account Details' screen. To do this, we store:",
                            list: [
                                "Device name and model",
                                "Date of the last sign-in on each device",
                                "Approximate device location (city and country), estimated from the IP address at sign-in time — we do not collect precise GPS location"
                            ]
                        },
                        {
                            title: "2.3 App Usage Data",
                            content: "Bible Planner stores the following information related to your use of the app:",
                            list: [
                                "Reading Progress: reading status of Bible books, chapters, and verses",
                                "Personal Notes: notes you create on reading plan days",
                                "Favorites and Preferences: favorited books, selected reading plan, visual theme, dynamic colors (Material You), and language"
                            ]
                        },
                        {
                            title: "2.4 AI Daily Study (Pro Feature)",
                            content: "When you use the AI Daily Study feature, we send the selected Bible passage, translation, and language to our server, which uses a third-party AI service to generate the devotional content shown to you. Free-plan users have a limited number of AI studies per period; Pro subscribers get expanded access."
                        },
                        {
                            title: "2.5 Subscription Data (Optional)",
                            content: "If you choose to subscribe to Bible Planner Pro, transactions are processed through the Apple App Store or Google Play Store. We use RevenueCat to manage your subscription status.",
                            list: [
                                "We do not collect or store payment details or credit cards.",
                                "We only receive confirmation that your subscription is active to unlock Pro features.",
                                "On Desktop, purchases are completed on a web checkout page operated by RevenueCat, opened in your system browser; a locally stored anonymous identifier (not linked to your identity) is used on your computer to associate the purchase with your subscription."
                            ]
                        },
                        {
                            title: "2.6 Analytics and Diagnostic Data",
                            content: "We use Firebase Analytics, Firebase Crashlytics, Firebase Remote Config (Android and iOS), Firebase Performance Monitoring (iOS), Google Analytics 4 (Desktop version), and Sentry (crash reporting on the Desktop version) to understand how the App is used, identify issues, and improve your experience. This includes:",
                            list: [
                                "Screens visited and actions taken in the App (e.g., completing a reading day, opening a plan)",
                                "Crash and error reports",
                                "Technical device information: model, operating system, App version, language, and theme",
                                "Whether you are a Pro subscriber (no subscription details) — used only to segment usage metrics",
                                "This data is handled in aggregate and, in most cases, is not directly linked to your name or email"
                            ]
                        },
                        {
                            title: "2.7 Data We Do NOT Collect",
                            content: "Bible Planner does NOT collect:",
                            list: [
                                "Contacts from your device",
                                "Browsing history from other apps or websites",
                                "Biometric data (fingerprint, facial recognition)",
                                "Precise GPS location",
                                "Direct financial information (processed exclusively by the app stores)"
                            ]
                        }
                    ]
                },
                {
                    title: "3. How We Use Your Information",
                    content: "We use the information collected to:",
                    list: [
                        "Maintain and sync your reading progress, notes, and preferences across devices",
                        "Authenticate your account and enable connected device management",
                        "Generate the AI Daily Study content you request",
                        "Process and validate Pro subscriptions",
                        "Understand how the App is used, fix issues, and prioritize improvements",
                        "Comply with legal obligations, where applicable"
                    ]
                },
                {
                    title: "4. Data Storage and Transfers",
                    subsections: [
                        {
                            title: "4.1 Local Storage",
                            content: "Your reading progress, notes, and preferences are always stored locally on your device, using Room Database and DataStore. If you do not sign in, this data stays only on your device."
                        },
                        {
                            title: "4.2 Cloud Sync (When Signed In)",
                            content: "When you sign in, your progress, favorites, and connected device list are also stored in our cloud database, hosted by Supabase, to enable sync across devices. Servers used by our providers (Supabase and Firebase/Google) may be located outside Brazil; in those cases, we take the precautions required by applicable law to protect your data during international transfers."
                        },
                        {
                            title: "4.3 Data Retention",
                            content: "We keep your account data while your account is active. If you request account deletion, we delete or anonymize your personal data within a reasonable period, except where retention is required by law."
                        }
                    ]
                },
                {
                    title: "5. Data Sharing and Third-Party Services",
                    content: "Bible Planner does not sell your data. We only share information with service providers necessary for the App to function:",
                    list: [
                        "Supabase: account authentication, cloud database, file storage (profile photo), real-time sync, and AI Study content generation",
                        "Firebase (Google): analytics, crash reporting (Crashlytics), and remote feature configuration",
                        "Sentry: crash reporting on the Desktop version of the App",
                        "RevenueCat: subscription management and validation (on Desktop, payment processing via web checkout)",
                        "Google Sign-In and Sign in with Apple: account authentication",
                        "App Stores (Apple/Google): payment processing"
                    ]
                },
                {
                    title: "6. Your Privacy Rights",
                    content: "Under Brazil's General Data Protection Law (LGPD) and other applicable privacy laws, you have the right to:",
                    list: [
                        "Confirm whether we process your data",
                        "Access, correct, or update your data",
                        "Request deletion or anonymization of your personal data",
                        "Request portability of your data",
                        "Withdraw your consent at any time",
                        "Obtain information about who your data is shared with"
                    ]
                },
                {
                    title: "7. Account and Data Deletion",
                    content: "Account deletion currently must be requested directly from our team. To delete your account and cloud-synced data (including connected device data), contact us at quare.software@gmail.com with the email address used to sign in. We will process your request within a reasonable period. You can also clear locally stored progress directly in the App at any time, without needing to contact us."
                },
                {
                    title: "8. Children's Privacy",
                    content: "Bible Planner is not directed at children under 13 and we do not knowingly collect personal data from children in that age group. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information."
                },
                {
                    title: "9. Security",
                    content: "We adopt reasonable technical and organizational measures to protect your data against unauthorized access, loss, or alteration. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security."
                },
                {
                    title: "10. Changes to This Policy",
                    content: "We may update this Privacy Policy periodically to reflect changes to the App or legal requirements. The 'Last updated' date at the top of this page indicates the most recent version. We recommend reviewing this page regularly."
                },
                {
                    title: "11. Contact Us",
                    content: "If you have questions about this Privacy Policy or want to exercise your privacy rights, contact us at quare.software@gmail.com."
                },
                {
                    title: "Summary",
                    content: "Bible Planner works offline for basic reading progress, but offers optional sign-in (Google/Apple) to sync your data across devices and unlock AI Daily Study. When you sign in, we collect your name, email, profile photo, and the approximate location of devices connected to your account. We use Firebase and Google Analytics to understand app usage. We do not sell your data or show ads. You can request deletion of your account and data at any time at quare.software@gmail.com.",
                    highlight: true
                }
            ]
        },
        es: {
            title: "Política de Privacidad",
            lastUpdate: "Última actualización: 29 de julio de 2026",
            sections: [
                {
                    title: "1. Introducción",
                    content: "¡Bienvenido a Bible Planner! Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos su información cuando utiliza nuestra aplicación (disponible en Android, iOS, Web y Escritorio) y nuestro sitio web. Bible Planner es desarrollado por PI Software LTDA (\"nosotros\"). Al usar la App, usted acepta la recopilación y el uso de información de acuerdo con esta Política."
                },
                {
                    title: "2. Información que Recopilamos",
                    subsections: [
                        {
                            title: "2.1 Datos de Cuenta (Al Iniciar Sesión)",
                            content: "Iniciar sesión es opcional: la mayoría de las funciones funcionan sin una cuenta. Si eliges iniciar sesión con Google o Apple (a través de Supabase Auth), recopilamos:",
                            list: [
                                "Nombre y correo electrónico asociados a tu cuenta de Google o Apple",
                                "Foto de perfil (si el proveedor de inicio de sesión la proporciona)",
                                "Proveedor de autenticación utilizado y fecha/hora de tus inicios de sesión",
                                "Nombre de usuario y foto de perfil personalizados, si eliges editarlos en la App (la foto que subes se almacena en nuestro servicio de almacenamiento en la nube, Supabase Storage)"
                            ]
                        },
                        {
                            title: "2.2 Dispositivos Conectados y Sincronización",
                            content: "Al iniciar sesión, Bible Planner te permite gestionar los dispositivos conectados a tu cuenta en la pantalla 'Detalles de la Cuenta'. Para ello, almacenamos:",
                            list: [
                                "Nombre y modelo del dispositivo",
                                "Fecha del último inicio de sesión en cada dispositivo",
                                "Ubicación aproximada del dispositivo (ciudad y país), estimada a partir de la dirección IP al iniciar sesión; no recopilamos ubicación GPS precisa"
                            ]
                        },
                        {
                            title: "2.3 Datos de Uso de la Aplicación",
                            content: "Bible Planner almacena la siguiente información relacionada con el uso de la aplicación:",
                            list: [
                                "Progreso de Lectura: estado de lectura de libros, capítulos y versículos de la Biblia",
                                "Notas Personales: notas que creas en los días del plan de lectura",
                                "Favoritos y Preferencias: libros marcados como favoritos, plan de lectura seleccionado, tema visual, colores dinámicos (Material You) e idioma"
                            ]
                        },
                        {
                            title: "2.4 Estudio Diario con IA (Función Pro)",
                            content: "Al usar la función de Estudio Diario con Inteligencia Artificial, enviamos el pasaje bíblico, la traducción y el idioma seleccionados a nuestro servidor, que utiliza un servicio de IA de terceros para generar el contenido devocional que se te muestra. Los usuarios del plan gratuito tienen un número limitado de estudios con IA por período; los suscriptores Pro tienen acceso ampliado."
                        },
                        {
                            title: "2.5 Datos de Suscripción (Opcional)",
                            content: "Si optas por suscribirte a Bible Planner Pro, las transacciones se procesan a través de Apple App Store o Google Play Store. Utilizamos RevenueCat para gestionar el estado de tu suscripción.",
                            list: [
                                "No recopilamos ni almacenamos detalles de pago ni tarjetas de crédito.",
                                "Solo recibimos confirmación de que tu suscripción está activa para desbloquear funciones Pro.",
                                "En la versión de Escritorio, la compra se completa en una página de pago en la web operada por RevenueCat, abierta en el navegador de tu sistema; un identificador anónimo (no vinculado a tu identidad) se almacena localmente en tu computadora para asociar la compra con tu suscripción."
                            ]
                        },
                        {
                            title: "2.6 Datos de Analítica y Diagnóstico",
                            content: "Utilizamos Firebase Analytics, Firebase Crashlytics, Firebase Remote Config (Android e iOS), Firebase Performance Monitoring (iOS), Google Analytics 4 (versión de Escritorio) y Sentry (informe de fallos en la versión de Escritorio) para entender cómo se usa la App, identificar fallos y mejorar tu experiencia. Esto incluye:",
                            list: [
                                "Pantallas visitadas y acciones realizadas en la App (p. ej., completar un día de lectura, abrir un plan)",
                                "Informes de errores y fallos de la aplicación",
                                "Información técnica del dispositivo: modelo, sistema operativo, versión de la App, idioma y tema",
                                "Si eres suscriptor Pro (sin detalles de la suscripción), usado solo para segmentar métricas de uso",
                                "Estos datos se tratan de forma agregada y, en la mayoría de los casos, no se vinculan directamente a tu nombre o correo electrónico"
                            ]
                        },
                        {
                            title: "2.7 Datos que NO Recopilamos",
                            content: "Bible Planner NO recopila:",
                            list: [
                                "Contactos de tu dispositivo",
                                "Historial de navegación de otras aplicaciones o sitios web",
                                "Datos biométricos (huella dactilar, reconocimiento facial)",
                                "Ubicación GPS precisa",
                                "Información financiera directa (procesada exclusivamente por las tiendas de aplicaciones)"
                            ]
                        }
                    ]
                },
                {
                    title: "3. Cómo Usamos su Información",
                    content: "Utilizamos la información recopilada para:",
                    list: [
                        "Mantener y sincronizar tu progreso de lectura, notas y preferencias entre dispositivos",
                        "Autenticar tu cuenta y permitir la gestión de dispositivos conectados",
                        "Generar el contenido del Estudio Diario con IA que solicitas",
                        "Procesar y validar suscripciones Pro",
                        "Entender cómo se usa la App, corregir fallos y priorizar mejoras",
                        "Cumplir con obligaciones legales, cuando corresponda"
                    ]
                },
                {
                    title: "4. Almacenamiento y Transferencia de Datos",
                    subsections: [
                        {
                            title: "4.1 Almacenamiento Local",
                            content: "Tu progreso de lectura, notas y preferencias siempre se almacenan localmente en tu dispositivo, usando Room Database y DataStore. Si no inicias sesión, estos datos permanecen solo en tu dispositivo."
                        },
                        {
                            title: "4.2 Sincronización en la Nube (Al Iniciar Sesión)",
                            content: "Al iniciar sesión, tu progreso, favoritos y la lista de dispositivos conectados también se almacenan en nuestra base de datos en la nube, alojada por Supabase, para permitir la sincronización entre dispositivos. Los servidores utilizados por nuestros proveedores (Supabase y Firebase/Google) pueden estar ubicados fuera de Brasil; en esos casos, adoptamos las precauciones exigidas por la ley aplicable para proteger tus datos en transferencias internacionales."
                        },
                        {
                            title: "4.3 Retención de Datos",
                            content: "Mantenemos los datos de tu cuenta mientras esté activa. Si solicitas la eliminación de tu cuenta, eliminamos o anonimizamos tus datos personales en un plazo razonable, salvo que la retención sea exigida por ley."
                        }
                    ]
                },
                {
                    title: "5. Compartir Datos y Servicios de Terceros",
                    content: "Bible Planner no vende tus datos. Solo compartimos información con proveedores de servicios necesarios para el funcionamiento de la App:",
                    list: [
                        "Supabase: autenticación de cuenta, base de datos en la nube, almacenamiento de archivos (foto de perfil), sincronización en tiempo real y generación de contenido del Estudio con IA",
                        "Firebase (Google): analítica, informes de fallos (Crashlytics) y configuración remota de funciones",
                        "Sentry: informe de fallos en la versión de Escritorio de la App",
                        "RevenueCat: gestión y validación de suscripciones (en la versión de Escritorio, procesamiento de pagos mediante checkout en la web)",
                        "Google Sign-In y Sign in with Apple: autenticación de cuenta",
                        "Tiendas de Aplicaciones (Apple/Google): procesamiento de pagos"
                    ]
                },
                {
                    title: "6. Tus Derechos de Privacidad",
                    content: "De acuerdo con la Ley General de Protección de Datos de Brasil (LGPD) y otras leyes de privacidad aplicables, tienes derecho a:",
                    list: [
                        "Confirmar si tratamos tus datos",
                        "Acceder, corregir o actualizar tus datos",
                        "Solicitar la eliminación o anonimización de tus datos personales",
                        "Solicitar la portabilidad de tus datos",
                        "Revocar tu consentimiento en cualquier momento",
                        "Obtener información sobre con quién se comparten tus datos"
                    ]
                },
                {
                    title: "7. Eliminación de Cuenta y Datos",
                    content: "Actualmente, la eliminación de cuenta debe solicitarse directamente a nuestro equipo. Para eliminar tu cuenta y los datos sincronizados en la nube (incluidos los datos de dispositivos conectados), contáctanos en quare.software@gmail.com indicando el correo electrónico usado para iniciar sesión. Procesaremos tu solicitud en un plazo razonable. También puedes borrar el progreso almacenado localmente directamente desde la App, sin necesidad de contactarnos."
                },
                {
                    title: "8. Privacidad de los Niños",
                    content: "Bible Planner no está dirigido a niños menores de 13 años y no recopilamos intencionalmente datos personales de niños en ese rango de edad. Si tomamos conocimiento de que hemos recopilado datos personales de un niño sin el consentimiento de sus padres o tutores, tomaremos medidas para eliminar esa información."
                },
                {
                    title: "9. Seguridad",
                    content: "Adoptamos medidas técnicas y organizativas razonables para proteger tus datos contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, ningún método de transmisión o almacenamiento electrónico es 100% seguro, y no podemos garantizar una seguridad absoluta."
                },
                {
                    title: "10. Cambios a esta Política",
                    content: "Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en la App o en los requisitos legales. La fecha de 'Última actualización' en la parte superior de esta página indica la versión más reciente. Recomendamos revisar esta página regularmente."
                },
                {
                    title: "11. Contacto",
                    content: "Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos de privacidad, contáctanos en quare.software@gmail.com."
                },
                {
                    title: "Resumen",
                    content: "Bible Planner funciona sin conexión para el progreso básico de lectura, pero ofrece inicio de sesión opcional (Google/Apple) para sincronizar tus datos entre dispositivos y desbloquear el Estudio Diario con IA. Al iniciar sesión, recopilamos tu nombre, correo electrónico, foto de perfil y la ubicación aproximada de los dispositivos conectados a tu cuenta. Usamos Firebase y Google Analytics para entender el uso de la App. No vendemos tus datos ni mostramos anuncios. Puedes solicitar la eliminación de tu cuenta y tus datos en cualquier momento en quare.software@gmail.com.",
                    highlight: true
                }
            ]
        }
    };

    const lang = content[currentLang as keyof typeof content] || content.en;

    return (
        <div style={{ padding: '4rem 0', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="animate-slide-up" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                    {lang.title}
                </h1>
                <p className="animate-slide-up delay-100" style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
                    {lang.lastUpdate}
                </p>

                {lang.sections.map((section, index) => (
                    <div key={index} className="animate-slide-up" style={{ marginBottom: '2.5rem', animationDelay: `${(index + 2) * 0.1}s` }}>
                        <h2 style={{
                            fontSize: section.highlight ? '1.8rem' : '1.5rem',
                            marginBottom: '1rem',
                            color: section.highlight ? 'var(--color-primary)' : 'var(--color-text)',
                            fontWeight: section.highlight ? 700 : 600
                        }}>
                            {section.title}
                        </h2>

                        {section.content && (
                            <p style={{
                                lineHeight: 1.8,
                                color: 'var(--color-text-secondary)',
                                marginBottom: section.list ? '1rem' : 0,
                                backgroundColor: section.highlight ? 'var(--color-surface)' : 'transparent',
                                padding: section.highlight ? '1.5rem' : 0,
                                borderRadius: section.highlight ? '0.5rem' : 0,
                                border: section.highlight ? '1px solid var(--color-border)' : 'none'
                            }}>
                                {section.content}
                            </p>
                        )}

                        {section.list && (
                            <ul style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', paddingLeft: '1.5rem' }}>
                                {section.list.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} style={{ marginTop: '1.5rem', marginLeft: '1rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-text)', fontWeight: 600 }}>
                                    {subsection.title}
                                </h3>
                                <p style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: ('list' in subsection && subsection.list) ? '0.75rem' : 0 }}>
                                    {subsection.content}
                                </p>
                                {'list' in subsection && subsection.list && (
                                    <ul style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', paddingLeft: '1.5rem' }}>
                                        {subsection.list.map((item: string, i: number) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
