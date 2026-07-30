import { useTranslation } from 'react-i18next';

export function TermsOfService() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    const content = {
        en: {
            title: "Terms of Service",
            lastUpdate: "Last Updated: July 29, 2026",
            sections: [
                {
                    title: "1. Acceptance of Terms",
                    content: "By downloading, installing, accessing, or using Bible Planner (\"the App\", \"the Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use the App."
                },
                {
                    title: "2. Description of Service",
                    content: "Bible Planner is a mobile, desktop, and web application designed to help you plan and track your Bible reading progress. The App provides:",
                    list: [
                        "Reading Plans: multiple reading plan types, including books order and chronological order",
                        "Progress Tracking: track reading progress at the book, chapter, and verse level",
                        "Weekly Organization: 52-week reading plans with weekly breakdowns",
                        "Personal Notes: create notes on reading plan days (free plan includes a limited number of notes; Pro removes this limit)",
                        "Bible Version Downloads: download and manage multiple Bible translations for offline reading",
                        "AI Daily Study (Pro Feature): AI-generated devotional content for the day's reading, with a limited number of free uses",
                        "Account and Sync (Optional): sign in with Google or Apple to sync your progress and preferences across devices, and manage connected devices",
                        "Profile Customization: edit your display name and profile photo",
                        "Theme Customization: light and dark themes, Material You dynamic colors support, and custom theme selection",
                        "Multi-platform Support: available on Android, iOS, Web, and Desktop",
                        "App Store Review Prompts: the App may ask you to rate it on the Google Play Store or Apple App Store, using the platform's native review prompt, at certain reading milestones"
                    ]
                },
                {
                    title: "3. Accounts and Sign-In",
                    subsections: [
                        {
                            title: "3.1 Optional Sign-In",
                            content: "Signing in with Google or Apple is optional. Without an account, the App works fully with data stored locally on your device. Signing in enables syncing your reading progress, notes, and favorites across your devices, and unlocks the AI Daily Study feature."
                        },
                        {
                            title: "3.2 Account Responsibility",
                            list: [
                                "You are responsible for maintaining the confidentiality of your Google or Apple account credentials",
                                "You are responsible for all activity that occurs through your account",
                                "You may view and remotely sign out devices connected to your account through the App's Account Details screen"
                            ]
                        },
                        {
                            title: "3.3 Account Deletion",
                            content: "You may request deletion of your account and associated cloud data at any time by contacting us as described in our Privacy Policy. We do not currently offer automatic in-app account deletion."
                        }
                    ]
                },
                {
                    title: "4. Subscriptions and Payments",
                    subsections: [
                        {
                            title: "4.1 Pro Subscription",
                            content: "Bible Planner offers an optional 'Pro' subscription with additional features. Subscriptions are available on a monthly or annual basis."
                        },
                        {
                            title: "4.2 Payment Processing",
                            content: "On Android and iOS, all payments are processed through the Google Play Store or Apple App Store. On Desktop, payments are processed through a web checkout page hosted by RevenueCat and opened in your system browser, rather than through an app store. We use RevenueCat to manage and validate your subscription status on all platforms."
                        },
                        {
                            title: "4.3 Management and Cancellation",
                            content: "You can manage or cancel your subscription at any time through your device's store settings (Apple ID or Google Account)."
                        }
                    ]
                },
                {
                    title: "5. User Rights and Data",
                    subsections: [
                        {
                            title: "5.1 Right to Use",
                            content: "You have the right to download, install, and use the App for personal, non-commercial purposes in accordance with these Terms."
                        },
                        {
                            title: "5.2 Data Ownership and Control",
                            list: [
                                "You own all data you create using the App, including your reading progress, notes, and preferences",
                                "Data is stored locally on your device and, if you sign in, also synced to our cloud database so it is available across your devices",
                                "You have the right to request deletion of your account and cloud-synced data at any time; locally stored progress can be cleared directly through the App"
                            ]
                        },
                        {
                            title: "5.3 Privacy",
                            list: [
                                "The App's core reading and progress-tracking features work offline and do not require an internet connection",
                                "Signing in, syncing, downloading Bible versions, AI Daily Study, and update checks require an internet connection",
                                "Please review our Privacy Policy for details on what information we collect and how we use it"
                            ]
                        }
                    ]
                },
                {
                    title: "6. User Responsibilities",
                    subsections: [
                        {
                            title: "6.1 Appropriate Use",
                            content: "You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:",
                            list: [
                                "Use the App for any commercial purpose without express written permission",
                                "Attempt to reverse engineer, decompile, or disassemble the App",
                                "Remove or alter any copyright, trademark, or other proprietary notices",
                                "Interfere with or disrupt the App's functionality",
                                "Use the App to violate any applicable laws or regulations"
                            ]
                        },
                        {
                            title: "6.2 Device and Account Security",
                            list: [
                                "You are responsible for maintaining the security of your device and account credentials",
                                "You are responsible for backing up any data you have not synced to your account, as locally stored data may be lost if the App is uninstalled",
                                "The App does not provide cloud backup for data that has not been synced through sign-in. Data loss due to device failure, uninstallation, or accidental deletion is not the responsibility of the App developers"
                            ]
                        },
                        {
                            title: "6.3 Accuracy of Information",
                            list: [
                                "You are responsible for the accuracy of any information you input into the App",
                                "The App is a tool to assist your Bible reading planning but does not guarantee the accuracy of Bible content, reading plans, or interpretations"
                            ]
                        }
                    ]
                },
                {
                    title: "7. AI-Generated Content",
                    content: "The AI Daily Study feature uses a third-party AI service to automatically generate devotional content based on the Bible passage you are reading. This content:",
                    list: [
                        "Is generated automatically and may contain inaccuracies, omissions, or content that does not reflect any particular theological tradition",
                        "Does not constitute religious, theological, or professional guidance",
                        "Should be used as a supplementary study aid, at your own discretion",
                        "May be subject to usage limits based on your subscription plan"
                    ]
                },
                {
                    title: "8. Intellectual Property",
                    subsections: [
                        {
                            title: "8.1 App Content",
                            content: "The App, including its design, code, features, and user interface, is the property of the App developers and is protected by copyright and other intellectual property laws. The App's source code is publicly available under a custom license that permits certain uses, such as personal use and modification, but prohibits commercial sale, rental, or redistribution of the Software without prior written permission from the copyright holder. See the LICENSE file in the App's public repository for the full terms."
                        },
                        {
                            title: "8.2 Bible Content",
                            content: "Bible texts and content displayed or referenced in the App are typically in the public domain or are used under appropriate licenses. The App does not claim ownership of Bible content itself."
                        },
                        {
                            title: "8.3 Third-Party Components",
                            content: "The App may incorporate third-party open-source libraries and components, which are used in accordance with their respective licenses."
                        }
                    ]
                },
                {
                    title: "9. Limitations of Liability",
                    subsections: [
                        {
                            title: "9.1 No Warranties",
                            content: "THE APP IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY. WE DO NOT WARRANT THAT:",
                            list: [
                                "The App will meet your requirements",
                                "The App will be uninterrupted, timely, secure, or error-free",
                                "The results obtained from using the App will be accurate or reliable",
                                "Any errors in the App will be corrected"
                            ]
                        },
                        {
                            title: "9.2 Data Loss",
                            content: "We are not responsible for any loss of data due to:",
                            list: [
                                "Device malfunction or failure",
                                "Uninstallation of the App",
                                "Operating system updates or changes",
                                "Accidental deletion by the user",
                                "Device loss or theft",
                                "Any other circumstances beyond our control"
                            ]
                        },
                        {
                            title: "9.3 Limitation of Liability",
                            content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE APP DEVELOPERS, CONTRIBUTORS, OR ANY RELATED PARTIES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES."
                        },
                        {
                            title: "9.4 Maximum Liability",
                            content: "IF, NOTWITHSTANDING THE ABOVE, WE ARE FOUND LIABLE FOR ANY DAMAGES RELATED TO THE APP, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO USE THE APP (OR IF THE APP IS FREE, ZERO DOLLARS)."
                        }
                    ]
                },
                {
                    title: "10. Disclaimers",
                    subsections: [
                        {
                            title: "10.1 Spiritual Content",
                            content: "The App is a tool for planning and tracking Bible reading. It does not provide religious guidance, theological interpretation, or spiritual counseling."
                        },
                        {
                            title: "10.2 Accuracy Disclaimer",
                            content: "While we strive to provide accurate information, we do not guarantee the accuracy, completeness, or reliability of Bible text references, reading plan schedules, progress tracking calculations, or AI-generated study content."
                        },
                        {
                            title: "10.3 Platform Compatibility",
                            content: "The App may not be compatible with all devices or operating system versions. We are not responsible for compatibility issues or performance on unsupported platforms."
                        },
                        {
                            title: "10.4 Third-Party Services",
                            content: "The App integrates third-party services to provide its features, including Firebase (Google), Supabase, RevenueCat, Sentry (Desktop crash reporting), Google Sign-In, Sign in with Apple, and a third-party AI content provider. We are not responsible for the availability, functionality, security, or content of these third-party services, which are governed by their own terms and privacy policies."
                        }
                    ]
                },
                {
                    title: "11. Modifications to Terms",
                    content: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting the updated Terms. Your continued use of the App after changes are posted constitutes your acceptance of the modified Terms."
                },
                {
                    title: "12. Modifications to the App",
                    content: "We reserve the right to modify, update, or discontinue any feature of the App at any time. We are under no obligation to maintain or update the App."
                },
                {
                    title: "13. Termination",
                    content: "You may stop using the App at any time by uninstalling it or, if you have an account, by requesting account deletion as described in Section 3.3. We reserve the right to terminate or suspend your access to the App or account at any time, with or without cause or notice."
                },
                {
                    title: "14. Data Backup and Recovery",
                    content: "Locally stored data that has not been synced through sign-in is not backed up automatically. If you sign in, your progress, notes, and favorites are synced to our cloud database, providing a degree of backup as long as your account remains active. You are responsible for backing up any data you wish to preserve that is not synced to your account."
                },
                {
                    title: "15. Indemnification",
                    content: "You agree to indemnify, defend, and hold harmless the App developers from any claims arising from your use of the App or violation of these Terms."
                },
                {
                    title: "16. Governing Law",
                    content: "These Terms shall be governed by and construed in accordance with the laws of the Federative Republic of Brazil, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the jurisdiction of the courts of Brazil, except where applicable consumer protection law requires otherwise."
                },
                {
                    title: "17. Severability",
                    content: "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary."
                },
                {
                    title: "18. Entire Agreement",
                    content: "These Terms constitute the entire agreement between you and the App developers regarding the use of the App."
                },
                {
                    title: "19. Contact Information",
                    content: "If you have any questions about these Terms, please contact us at quare.software@gmail.com or through our GitHub repository."
                },
                {
                    title: "20. Acknowledgment",
                    content: "BY USING THE APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM.",
                    highlight: true
                }
            ]
        },
        pt: {
            title: "Termos de Serviço",
            lastUpdate: "Última Atualização: 29 de julho de 2026",
            sections: [
                {
                    title: "1. Aceitação dos Termos",
                    content: "Ao baixar, instalar, acessar ou usar o Bible Planner (\"o App\", \"o Serviço\"), você concorda em ficar vinculado a estes Termos de Serviço (\"Termos\"). Se você não concorda com estes Termos, por favor, não use o App."
                },
                {
                    title: "2. Descrição do Serviço",
                    content: "O Bible Planner é um aplicativo móvel, desktop e web projetado para ajudá-lo a planejar e acompanhar seu progresso de leitura da Bíblia. O App oferece:",
                    list: [
                        "Planos de Leitura: múltiplos tipos de planos, incluindo ordem dos livros e ordem cronológica",
                        "Acompanhamento de Progresso: acompanhe o progresso da leitura no nível de livro, capítulo e versículo",
                        "Organização Semanal: planos de leitura de 52 semanas com divisões semanais",
                        "Notas Pessoais: crie notas nos dias do plano de leitura (o plano gratuito inclui um número limitado de notas; o Pro remove esse limite)",
                        "Download de Versões da Bíblia: baixe e gerencie múltiplas traduções para leitura offline",
                        "Estudo Diário com IA (Recurso Pro): conteúdo devocional gerado por IA para a leitura do dia, com um número limitado de usos gratuitos",
                        "Conta e Sincronização (Opcional): faça login com Google ou Apple para sincronizar seu progresso e preferências entre dispositivos, e gerencie os dispositivos conectados",
                        "Personalização de Perfil: edite seu nome de exibição e foto de perfil",
                        "Personalização de Tema: temas claro e escuro, suporte a cores dinâmicas do Material You e seleção de tema personalizado",
                        "Suporte Multiplataforma: disponível no Android, iOS, Web e Desktop",
                        "Solicitações de Avaliação: o App pode solicitar que você o avalie na Google Play Store ou na Apple App Store, usando o recurso nativo de avaliação da plataforma, em determinados marcos de leitura"
                    ]
                },
                {
                    title: "3. Contas e Login",
                    subsections: [
                        {
                            title: "3.1 Login Opcional",
                            content: "Fazer login com Google ou Apple é opcional. Sem uma conta, o App funciona integralmente com os dados armazenados localmente no seu dispositivo. Fazer login permite sincronizar seu progresso de leitura, notas e favoritos entre dispositivos, além de desbloquear o recurso de Estudo Diário com IA."
                        },
                        {
                            title: "3.2 Responsabilidade pela Conta",
                            list: [
                                "Você é responsável por manter a confidencialidade das credenciais da sua conta Google ou Apple",
                                "Você é responsável por toda atividade realizada através da sua conta",
                                "Você pode visualizar e desconectar remotamente os dispositivos conectados à sua conta na tela de Detalhes da Conta do App"
                            ]
                        },
                        {
                            title: "3.3 Exclusão de Conta",
                            content: "Você pode solicitar a exclusão da sua conta e dos dados associados na nuvem a qualquer momento, entrando em contato conforme descrito em nossa Política de Privacidade. Atualmente não oferecemos exclusão automática de conta pelo App."
                        }
                    ]
                },
                {
                    title: "4. Assinaturas e Pagamentos",
                    subsections: [
                        {
                            title: "4.1 Assinatura Pro",
                            content: "O Bible Planner oferece uma assinatura opcional 'Pro' com recursos adicionais. As assinaturas estão disponíveis mensalmente ou anualmente."
                        },
                        {
                            title: "4.2 Processamento de Pagamento",
                            content: "No Android e iOS, todos os pagamentos são processados através da Google Play Store ou Apple App Store. No Desktop, os pagamentos são processados através de uma página de checkout na web, operada pela RevenueCat e aberta no navegador do seu sistema, em vez de uma loja de aplicativos. Utilizamos o RevenueCat para gerenciar e validar o status da sua assinatura em todas as plataformas."
                        },
                        {
                            title: "4.3 Gerenciamento e Cancelamento",
                            content: "Você pode gerenciar ou cancelar sua assinatura a qualquer momento através das configurações da loja do seu dispositivo (Apple ID ou conta do Google)."
                        }
                    ]
                },
                {
                    title: "5. Direitos do Usuário e Dados",
                    subsections: [
                        {
                            title: "5.1 Direito de Uso",
                            content: "Você tem o direito de baixar, instalar e usar o App para fins pessoais e não comerciais, de acordo com estes Termos."
                        },
                        {
                            title: "5.2 Propriedade e Controle de Dados",
                            list: [
                                "Você possui todos os dados que cria usando o App, incluindo seu progresso de leitura, notas e preferências",
                                "Os dados são armazenados localmente no seu dispositivo e, se você fizer login, também são sincronizados com nosso banco de dados na nuvem para ficarem disponíveis em todos os seus dispositivos",
                                "Você tem o direito de solicitar a exclusão da sua conta e dos dados sincronizados na nuvem a qualquer momento; o progresso armazenado localmente pode ser apagado diretamente pelo App"
                            ]
                        },
                        {
                            title: "5.3 Privacidade",
                            list: [
                                "Os recursos principais de leitura e acompanhamento de progresso funcionam offline e não exigem conexão com a internet",
                                "Fazer login, sincronizar, baixar versões da Bíblia, usar o Estudo Diário com IA e verificar atualizações exigem conexão com a internet",
                                "Consulte nossa Política de Privacidade para detalhes sobre quais informações coletamos e como as utilizamos"
                            ]
                        }
                    ]
                },
                {
                    title: "6. Responsabilidades do Usuário",
                    subsections: [
                        {
                            title: "6.1 Uso Apropriado",
                            content: "Você concorda em usar o App apenas para fins legais e de acordo com estes Termos. Você concorda em não:",
                            list: [
                                "Usar o App para qualquer finalidade comercial sem permissão expressa por escrito",
                                "Tentar fazer engenharia reversa, descompilar ou desmontar o App",
                                "Remover ou alterar quaisquer avisos de direitos autorais, marcas registradas ou outros avisos de propriedade",
                                "Interferir ou interromper a funcionalidade do App",
                                "Usar o App para violar quaisquer leis ou regulamentos aplicáveis"
                            ]
                        },
                        {
                            title: "6.2 Segurança do Dispositivo e da Conta",
                            list: [
                                "Você é responsável por manter a segurança do seu dispositivo e das credenciais da sua conta",
                                "Você é responsável por fazer backup de quaisquer dados que não tenham sido sincronizados com sua conta, já que dados armazenados apenas localmente podem ser perdidos se o App for desinstalado",
                                "O App não fornece backup em nuvem para dados que não tenham sido sincronizados através do login. A perda de dados devido a falha do dispositivo, desinstalação ou exclusão acidental não é responsabilidade dos desenvolvedores do App"
                            ]
                        },
                        {
                            title: "6.3 Precisão das Informações",
                            list: [
                                "Você é responsável pela precisão de qualquer informação que inserir no App",
                                "O App é uma ferramenta para auxiliar no planejamento da leitura da Bíblia, mas não garante a precisão do conteúdo da Bíblia, planos de leitura ou interpretações"
                            ]
                        }
                    ]
                },
                {
                    title: "7. Conteúdo Gerado por IA",
                    content: "O recurso de Estudo Diário com IA utiliza um serviço de inteligência artificial de terceiros para gerar automaticamente conteúdo devocional com base na passagem bíblica que você está lendo. Esse conteúdo:",
                    list: [
                        "É gerado automaticamente e pode conter imprecisões, omissões ou conteúdo que não reflete uma tradição teológica específica",
                        "Não constitui orientação religiosa, teológica ou profissional",
                        "Deve ser utilizado como material de apoio ao estudo, a seu critério",
                        "Pode estar sujeito a limites de uso de acordo com seu plano de assinatura"
                    ]
                },
                {
                    title: "8. Propriedade Intelectual",
                    subsections: [
                        {
                            title: "8.1 Conteúdo do App",
                            content: "O App, incluindo seu design, código, recursos e interface do usuário, é propriedade dos desenvolvedores do App e é protegido por direitos autorais e outras leis de propriedade intelectual. O código-fonte do App está disponível publicamente sob uma licença personalizada, que permite determinados usos, como uso pessoal e modificação, mas proíbe a venda, locação ou redistribuição comercial do Software sem permissão prévia por escrito do titular dos direitos autorais. Consulte o arquivo LICENSE no repositório público do App para os termos completos."
                        },
                        {
                            title: "8.2 Conteúdo da Bíblia",
                            content: "Os textos bíblicos e o conteúdo exibido ou referenciado no App estão tipicamente em domínio público ou são usados sob licenças apropriadas. O App não reivindica a propriedade do próprio conteúdo da Bíblia."
                        },
                        {
                            title: "8.3 Componentes de Terceiros",
                            content: "O App pode incorporar bibliotecas e componentes de código aberto de terceiros, que são usados de acordo com suas respectivas licenças."
                        }
                    ]
                },
                {
                    title: "9. Limitações de Responsabilidade",
                    subsections: [
                        {
                            title: "9.1 Sem Garantias",
                            content: "O APP É FORNECIDO \"COMO ESTÁ\" E \"CONFORME DISPONÍVEL\" SEM QUAISQUER GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIABILIDADE, ADEQUAÇÃO A UM DETERMINADO FIM, NÃO VIOLAÇÃO OU PRECISÃO. NÓS NÃO GARANTIMOS QUE:",
                            list: [
                                "O App atenderá aos seus requisitos",
                                "O App será ininterrupto, oportuno, seguro ou livre de erros",
                                "Os resultados obtidos com o uso do App serão precisos ou confiáveis",
                                "Quaisquer erros no App serão corrigidos"
                            ]
                        },
                        {
                            title: "9.2 Perda de Dados",
                            content: "Não somos responsáveis por qualquer perda de dados devido a:",
                            list: [
                                "Mau funcionamento ou falha do dispositivo",
                                "Desinstalação do App",
                                "Atualizações ou alterações do sistema operacional",
                                "Exclusão acidental pelo usuário",
                                "Perda ou roubo do dispositivo",
                                "Quaisquer outras circunstâncias fora do nosso controle"
                            ]
                        },
                        {
                            title: "9.3 Limitação de Responsabilidade",
                            content: "ATÉ A MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, EM NENHUMA HIPÓTESE OS DESENVOLVEDORES DO APP, COLABORADORES OU QUAISQUER PARTES RELACIONADAS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS."
                        },
                        {
                            title: "9.4 Responsabilidade Máxima",
                            content: "SE, APESAR DO ACIMA EXPOSTO, FORMOS CONSIDERADOS RESPONSÁVEIS POR QUAISQUER DANOS RELACIONADOS AO APP, NOSSA RESPONSABILIDADE TOTAL NÃO EXCEDERÁ O VALOR QUE VOCÊ PAGOU PARA USAR O APP (OU SE O APP FOR GRATUITO, ZERO DÓLARES)."
                        }
                    ]
                },
                {
                    title: "10. Isenções de Responsabilidade",
                    subsections: [
                        {
                            title: "10.1 Conteúdo Espiritual",
                            content: "O App é uma ferramenta para planejar e acompanhar a leitura da Bíblia. Não fornece orientação religiosa, interpretação teológica ou aconselhamento espiritual."
                        },
                        {
                            title: "10.2 Isenção de Precisão",
                            content: "Embora nos esforcemos para fornecer informações precisas, não garantimos a precisão, integridade ou confiabilidade de referências bíblicas, cronogramas, cálculos de progresso ou conteúdo de estudo gerado por IA."
                        },
                        {
                            title: "10.3 Compatibilidade de Plataforma",
                            content: "O App pode não ser compatível com todos os dispositivos ou versões de sistemas operacionais. Não somos responsáveis por problemas de compatibilidade ou desempenho em plataformas não suportadas."
                        },
                        {
                            title: "10.4 Serviços de Terceiros",
                            content: "O App integra serviços de terceiros para fornecer seus recursos, incluindo Firebase (Google), Supabase, RevenueCat, Sentry (relatório de falhas no Desktop), Google Sign-In, Sign in with Apple e um provedor de IA de terceiros. Não somos responsáveis pela disponibilidade, funcionalidade, segurança ou conteúdo desses serviços de terceiros, que são regidos por seus próprios termos e políticas de privacidade."
                        }
                    ]
                },
                {
                    title: "11. Modificações aos Termos",
                    content: "Nós nos reservamos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado do App constitui aceitação dos Termos modificados."
                },
                {
                    title: "12. Modificações ao App",
                    content: "Nós nos reservamos o direito de modificar, atualizar ou descontinuar qualquer recurso do App a qualquer momento. Não temos obrigação de manter ou atualizar o App."
                },
                {
                    title: "13. Rescisão",
                    content: "Você pode parar de usar o App a qualquer momento desinstalando-o ou, se tiver uma conta, solicitando a exclusão da conta conforme descrito na Seção 3.3. Nós nos reservamos o direito de rescindir ou suspender seu acesso ao App ou à sua conta a qualquer momento, com ou sem justa causa ou aviso prévio."
                },
                {
                    title: "14. Backup e Recuperação de Dados",
                    content: "Dados armazenados apenas localmente, que não foram sincronizados através do login, não possuem backup automático. Se você fizer login, seu progresso, notas e favoritos são sincronizados com nosso banco de dados na nuvem, oferecendo um nível de backup enquanto sua conta estiver ativa. Você é responsável por fazer backup de quaisquer dados que deseje preservar e que não estejam sincronizados com sua conta."
                },
                {
                    title: "15. Indenização",
                    content: "Você concorda em indenizar e isentar os desenvolvedores do App de quaisquer reivindicações decorrentes do seu uso do App ou violação destes Termos."
                },
                {
                    title: "16. Lei Aplicável",
                    content: "Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Quaisquer disputas decorrentes destes Termos estarão sujeitas à jurisdição dos tribunais brasileiros, exceto quando a legislação de proteção ao consumidor aplicável determinar de forma diversa."
                },
                {
                    title: "17. Divisibilidade",
                    content: "Se qualquer disposição destes Termos for considerada inexequível ou inválida, essa disposição será limitada ou eliminada na medida mínima necessária."
                },
                {
                    title: "18. Acordo Integral",
                    content: "Estes Termos constituem o acordo integral entre você e os desenvolvedores do App em relação ao uso do App."
                },
                {
                    title: "19. Informações de Contato",
                    content: "Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail quare.software@gmail.com ou através do nosso repositório no GitHub."
                },
                {
                    title: "20. Reconhecimento",
                    content: "AO USAR O APP, VOCÊ RECONHECE QUE LEU ESTES TERMOS, OS ENTENDEU E CONCORDA EM FICAR VINCULADO A ELES.",
                    highlight: true
                }
            ]
        },
        es: {
            title: "Términos de Servicio",
            lastUpdate: "Última Actualización: 29 de julio de 2026",
            sections: [
                {
                    title: "1. Aceptación de los Términos",
                    content: "Al descargar, instalar, acceder o utilizar Bible Planner (\"la App\", \"el Servicio\"), usted acepta estar sujeto a estos Términos de Servicio (\"Términos\"). Si no está de acuerdo con estos Términos, por favor no utilice la App."
                },
                {
                    title: "2. Descripción del Servicio",
                    content: "Bible Planner es una aplicación móvil, de escritorio y web diseñada para ayudarte a planificar y realizar un seguimiento de tu progreso de lectura de la Biblia. La App proporciona:",
                    list: [
                        "Planes de Lectura: múltiples tipos de planes, incluyendo orden de libros y orden cronológico",
                        "Seguimiento de Progreso: rastrea el progreso de la lectura a nivel de libro, capítulo y versículo",
                        "Organización Semanal: planes de lectura de 52 semanas con desgloses semanales",
                        "Notas Personales: crea notas en los días del plan de lectura (el plan gratuito incluye un número limitado de notas; el Pro elimina ese límite)",
                        "Descarga de Versiones de la Biblia: descarga y gestiona múltiples traducciones para lectura sin conexión",
                        "Estudio Diario con IA (Función Pro): contenido devocional generado por IA para la lectura del día, con un número limitado de usos gratuitos",
                        "Cuenta y Sincronización (Opcional): inicia sesión con Google o Apple para sincronizar tu progreso y preferencias entre dispositivos, y gestiona los dispositivos conectados",
                        "Personalización de Perfil: edita tu nombre de usuario y foto de perfil",
                        "Personalización de Tema: temas claro y oscuro, soporte para colores dinámicos de Material You y selección de tema personalizado",
                        "Soporte Multiplataforma: disponible en Android, iOS, Web y Escritorio",
                        "Solicitudes de Reseña: la App puede pedirte que la califiques en la Google Play Store o la Apple App Store, usando el aviso nativo de reseñas de la plataforma, en ciertos hitos de lectura"
                    ]
                },
                {
                    title: "3. Cuentas e Inicio de Sesión",
                    subsections: [
                        {
                            title: "3.1 Inicio de Sesión Opcional",
                            content: "Iniciar sesión con Google o Apple es opcional. Sin una cuenta, la App funciona completamente con los datos almacenados localmente en tu dispositivo. Iniciar sesión permite sincronizar tu progreso de lectura, notas y favoritos entre dispositivos, y desbloquea la función de Estudio Diario con IA."
                        },
                        {
                            title: "3.2 Responsabilidad de la Cuenta",
                            list: [
                                "Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta de Google o Apple",
                                "Eres responsable de toda actividad realizada a través de tu cuenta",
                                "Puedes ver y cerrar sesión remotamente en los dispositivos conectados a tu cuenta desde la pantalla de Detalles de la Cuenta de la App"
                            ]
                        },
                        {
                            title: "3.3 Eliminación de Cuenta",
                            content: "Puedes solicitar la eliminación de tu cuenta y de los datos asociados en la nube en cualquier momento, contactándonos según se describe en nuestra Política de Privacidad. Actualmente no ofrecemos eliminación automática de cuenta desde la App."
                        }
                    ]
                },
                {
                    title: "4. Suscripciones y Pagos",
                    subsections: [
                        {
                            title: "4.1 Suscripción Pro",
                            content: "Bible Planner ofrece una suscripción opcional 'Pro' con funciones adicionales. Las suscripciones están disponibles de forma mensual o anual."
                        },
                        {
                            title: "4.2 Procesamiento de Pagos",
                            content: "En Android e iOS, todos los pagos se procesan a través de Google Play Store o Apple App Store. En Escritorio, los pagos se procesan mediante una página de checkout en la web, operada por RevenueCat y abierta en el navegador de tu sistema, en lugar de una tienda de aplicaciones. Utilizamos RevenueCat para gestionar y validar el estado de tu suscripción en todas las plataformas."
                        },
                        {
                            title: "4.3 Gestión y Cancelación",
                            content: "Puedes gestionar o cancelar tu suscripción en cualquier momento a través de los ajustes de la tienda de tu dispositivo (Apple ID o cuenta de Google)."
                        }
                    ]
                },
                {
                    title: "5. Derechos del Usuario y Datos",
                    subsections: [
                        {
                            title: "5.1 Derecho de Uso",
                            content: "Usted tiene el derecho de descargar, instalar y utilizar la App para fines personales y no comerciales, de acuerdo con estos Términos."
                        },
                        {
                            title: "5.2 Propiedad y Control de Datos",
                            list: [
                                "Eres dueño de todos los datos que creas utilizando la App, incluyendo tu progreso de lectura, notas y preferencias",
                                "Los datos se almacenan localmente en tu dispositivo y, si inicias sesión, también se sincronizan con nuestra base de datos en la nube para que estén disponibles en todos tus dispositivos",
                                "Tienes derecho a solicitar la eliminación de tu cuenta y de los datos sincronizados en la nube en cualquier momento; el progreso almacenado localmente se puede borrar directamente desde la App"
                            ]
                        },
                        {
                            title: "5.3 Privacidad",
                            list: [
                                "Las funciones principales de lectura y seguimiento de progreso funcionan sin conexión y no requieren conexión a internet",
                                "Iniciar sesión, sincronizar, descargar versiones de la Biblia, usar el Estudio Diario con IA y verificar actualizaciones requieren conexión a internet",
                                "Consulta nuestra Política de Privacidad para más detalles sobre qué información recopilamos y cómo la utilizamos"
                            ]
                        }
                    ]
                },
                {
                    title: "6. Responsabilidades del Usuario",
                    subsections: [
                        {
                            title: "6.1 Uso Apropiado",
                            content: "Usted acepta utilizar la App solo para fines legales y de acuerdo con estos Términos. Usted acepta no:",
                            list: [
                                "Utilizar la App para cualquier propósito comercial sin permiso expreso por escrito",
                                "Intentar realizar ingeniería inversa, descompilar o desensamblar la App",
                                "Eliminar o alterar cualquier aviso de derechos de autor, marca registrada u otros avisos de propiedad",
                                "Interferir o interrumpir la funcionalidad de la App",
                                "Utilizar la App para violar cualquier ley o regulación aplicable"
                            ]
                        },
                        {
                            title: "6.2 Seguridad del Dispositivo y de la Cuenta",
                            list: [
                                "Eres responsable de mantener la seguridad de tu dispositivo y de las credenciales de tu cuenta",
                                "Eres responsable de hacer una copia de seguridad de cualquier dato que no se haya sincronizado con tu cuenta, ya que los datos almacenados solo localmente pueden perderse si se desinstala la App",
                                "La App no proporciona copia de seguridad en la nube para datos que no se hayan sincronizado mediante el inicio de sesión. La pérdida de datos debido a fallas del dispositivo, desinstalación o eliminación accidental no es responsabilidad de los desarrolladores de la App"
                            ]
                        },
                        {
                            title: "6.3 Precisión de la Información",
                            list: [
                                "Usted es responsable de la precisión de cualquier información que ingrese en la App",
                                "La App es una herramienta para ayudar en la planificación de su lectura bíblica, pero no garantiza la precisión del contenido de la Biblia, planes de lectura o interpretaciones"
                            ]
                        }
                    ]
                },
                {
                    title: "7. Contenido Generado por IA",
                    content: "La función de Estudio Diario con IA utiliza un servicio de inteligencia artificial de terceros para generar automáticamente contenido devocional basado en el pasaje bíblico que estás leyendo. Este contenido:",
                    list: [
                        "Se genera automáticamente y puede contener imprecisiones, omisiones o contenido que no refleje una tradición teológica específica",
                        "No constituye orientación religiosa, teológica o profesional",
                        "Debe utilizarse como material de apoyo al estudio, a tu propio criterio",
                        "Puede estar sujeto a límites de uso según tu plan de suscripción"
                    ]
                },
                {
                    title: "8. Propiedad Intelectual",
                    subsections: [
                        {
                            title: "8.1 Contenido de la App",
                            content: "La App, incluyendo su diseño, código, características e interfaz de usuario, es propiedad de los desarrolladores de la App y está protegida por derechos de autor y otras leyes de propiedad intelectual. El código fuente de la App está disponible públicamente bajo una licencia personalizada, que permite ciertos usos, como el uso personal y la modificación, pero prohíbe la venta, alquiler o redistribución comercial del Software sin permiso previo por escrito del titular de los derechos de autor. Consulta el archivo LICENSE en el repositorio público de la App para conocer los términos completos."
                        },
                        {
                            title: "8.2 Contenido de la Biblia",
                            content: "Los textos bíblicos y el contenido mostrado o referenciado en la App están típicamente en el dominio público o se utilizan bajo licencias apropiadas. La App no reclama la propiedad del contenido bíblico en sí."
                        },
                        {
                            title: "8.3 Componentes de Terceros",
                            content: "La App puede incorporar bibliotecas y componentes de código abierto de terceros, que se utilizan de acuerdo con sus respectivas licencias."
                        }
                    ]
                },
                {
                    title: "9. Limitaciones de Responsabilidad",
                    subsections: [
                        {
                            title: "9.1 Sin Garantías",
                            content: "LA APP SE PROPORCIONA \"TAL CUAL\" Y \"SEGÚN DISPONIBILIDAD\" SIN NINGUNA GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, NO INFRACCIÓN O PRECISIÓN. NO GARANTIZAMOS QUE:",
                            list: [
                                "La App cumplirá con sus requisitos",
                                "La App será ininterrumpida, oportuna, segura o libre de errores",
                                "Los resultados obtenidos del uso de la App serán precisos o confiables",
                                "Cualquier error en la App será corregido"
                            ]
                        },
                        {
                            title: "9.2 Pérdida de Datos",
                            content: "No somos responsables de ninguna pérdida de datos debido a:",
                            list: [
                                "Mal funcionamiento o falla del dispositivo",
                                "Desinstalación de la App",
                                "Actualizaciones o cambios del sistema operativo",
                                "Eliminación accidental por parte del usuario",
                                "Pérdida o robo del dispositivo",
                                "Cualquier otra circunstancia fuera de nuestro control"
                            ]
                        },
                        {
                            title: "9.3 Limitación de Responsabilidad",
                            content: "EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY APLICABLE, EN NINGÚN CASO LOS DESARROLLADORES DE LA APP, COLABORADORES O CUALQUIER PARTE RELACIONADA SERÁN RESPONSABLES POR CUALQUIER DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE O PUNITIVO."
                        },
                        {
                            title: "9.4 Responsabilidad Máxima",
                            content: "SI, A PESAR DE LO ANTERIOR, SE NOS ENCUENTRA RESPONSABLES POR CUALQUIER DAÑO RELACIONADO CON LA APP, NUESTRA RESPONSABILIDAD TOTAL NO EXCEDERÁ LA CANTIDAD QUE USTED PAGÓ POR USAR LA APP (O SI LA APP ES GRATUITA, CERO DÓLARES)."
                        }
                    ]
                },
                {
                    title: "10. Descargos de Responsabilidad",
                    subsections: [
                        {
                            title: "10.1 Contenido Espiritual",
                            content: "La App es una herramienta para planificar y rastrear la lectura de la Biblia. No proporciona orientación religiosa, interpretación teológica o asesoramiento espiritual."
                        },
                        {
                            title: "10.2 Descargo de Precisión",
                            content: "Aunque nos esforzamos por proporcionar información precisa, no garantizamos la precisión, integridad o confiabilidad de referencias bíblicas, horarios, cálculos de progreso o contenido de estudio generado por IA."
                        },
                        {
                            title: "10.3 Compatibilidad de Plataforma",
                            content: "La App puede no ser compatible con todos los dispositivos o versiones de sistemas operativos. No somos responsables por problemas de compatibilidad o rendimiento en plataformas no soportadas."
                        },
                        {
                            title: "10.4 Servicios de Terceros",
                            content: "La App integra servicios de terceros para proporcionar sus funciones, incluyendo Firebase (Google), Supabase, RevenueCat, Sentry (informe de fallos en Escritorio), Google Sign-In, Sign in with Apple y un proveedor de IA de terceros. No somos responsables de la disponibilidad, funcionalidad, seguridad o contenido de estos servicios de terceros, que se rigen por sus propios términos y políticas de privacidad."
                        }
                    ]
                },
                {
                    title: "11. Modificaciones a los Términos",
                    content: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de la publicación. Su uso continuado de la App constituye su aceptación de los Términos modificados."
                },
                {
                    title: "12. Modificaciones a la App",
                    content: "Nos reservamos el derecho de modificar, actualizar o descontinuar cualquier función de la App en cualquier momento. No tenemos obligación de mantener o actualizar la App."
                },
                {
                    title: "13. Terminación",
                    content: "Puedes dejar de usar la App en cualquier momento desinstalándola o, si tienes una cuenta, solicitando la eliminación de la cuenta según lo descrito en la Sección 3.3. Nos reservamos el derecho de terminar o suspender tu acceso a la App o a tu cuenta en cualquier momento, con o sin causa o aviso previo."
                },
                {
                    title: "14. Respaldo y Recuperación de Datos",
                    content: "Los datos almacenados solo localmente, que no se han sincronizado mediante el inicio de sesión, no tienen respaldo automático. Si inicias sesión, tu progreso, notas y favoritos se sincronizan con nuestra base de datos en la nube, lo que ofrece cierto nivel de respaldo mientras tu cuenta esté activa. Eres responsable de hacer una copia de seguridad de cualquier dato que desees conservar y que no esté sincronizado con tu cuenta."
                },
                {
                    title: "15. Indemnización",
                    content: "Usted acepta indemnizar y mantener indemne a los desarrolladores de la App de cualquier reclamación que surja de su uso de la App o violación de estos Términos."
                },
                {
                    title: "16. Ley Aplicable",
                    content: "Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Federativa de Brasil. Cualquier disputa derivada de estos Términos estará sujeta a la jurisdicción de los tribunales brasileños, excepto cuando la legislación de protección al consumidor aplicable disponga lo contrario."
                },
                {
                    title: "17. Divisibilidad",
                    content: "Si alguna disposición de estos Términos se considera inaplicable o inválida, esa disposición se limitará o eliminará en la medida mínima necesaria."
                },
                {
                    title: "18. Acuerdo Completo",
                    content: "Estos Términos constituyen el acuerdo completo entre usted y los desarrolladores de la App con respecto al uso de la App."
                },
                {
                    title: "19. Información de Contacto",
                    content: "Si tiene alguna pregunta sobre estos Términos, contáctenos en quare.software@gmail.com o a través de nuestro repositorio de GitHub."
                },
                {
                    title: "20. Reconocimiento",
                    content: "AL USAR LA APP, USTED RECONOCE QUE HA LEÍDO ESTOS TÉRMINOS, LOS ENTIENDE Y ACEPTA ESTAR OBLIGADO POR ELLOS.",
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
