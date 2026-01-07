"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Globe,
  Download,
  Users,
  ExternalLink,
  MessageCircle,
  AlertTriangle,
  Info,
  Megaphone,
  Youtube,
  Copy,
  Check
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Alert, AlertDescription } from "@/src/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"

const translations = {
  pt: {
    title: "Plantas vs Zumbis: Fusion | Guaraná Team Edition",
    discordTitle: "SERVIDOR OFICIAL DO DISCORD",
    discordDesc:
      "Junte-se ao nosso servidor oficial do Discord, orgulhosamente gerenciado pela Guaraná Team — o grupo por trás deste projeto. Este é o centro principal para downloads, atualizações, suporte da comunidade, relatórios de bugs e discussões sobre o jogo.",
    discordNote: "Tendo problemas com instalação ou gameplay? Verifique o canal #faq antes de pedir ajuda!",
    importantTitle: "IMPORTANTE – ANTES DE INSTALAR",
    androidWarning:
      "📱 Usuários Android: Desinstale a sua instalação atual, mas NÃO se esqueça de antes salvar o seu progresso. Após isso instale normalmente a nossa versão e importe o seu save.",
    pcNote:
      "💻 Usuários PC: Você pode desinstalar versões anteriores com segurança. Seus dados salvos serão preservados.",
    backupVideo:
      "▶️ Veja como fazer backup no Android aqui:",
    downloadLinks: "Links de Download",
    oldVersions: "Versões anteriores",
    version: "Versão",
    platform: "Plataforma",
    language: "Idioma",
    download: "Download",
    officialDlcs: "DLCs Oficiais",
    item: "Item",
    authors: "Autor(es)",
    dlcNote:
      "DLCs oficiais são construídos para o modloader BepInX e NÃO são compatíveis com MelonLoader e seus mods. A nossa versão atual não utiliza nenhum modloader como base, sendo assim temos total compatibilidade com a DLC.",
    credits: "Créditos",
    originalDevs: "Desenvolvedores Originais – Equipe do 蓝飘飘fly",
    guaranaTeam: "Guaraná Team – Contribuidores do Projeto",
    role: "Função",
    contributor: "Contribuidor(es)",
    specialThanks: "Agradecimentos Especiais",
    needHelp: "Precisa de Ajuda?",
    helpText:
      "Se você não tem certeza de onde colocar a pasta do jogo, como instalar DLCs, ou está encontrando bugs — vá para os canais #faq e #support do nosso servidor Discord. Estamos felizes em ajudá-lo a fazer tudo funcionar perfeitamente!",
    thankYou: "Obrigado por apoiar PvZ: Fusion e a Guaraná Team 🌱",
    joinDiscord: "Entrar no Discord",
    changelog: "Histórico de Versões",
    changelogDesc: "Acompanhe todas as atualizações e melhorias do PvZ: Fusion",
    releaseDate: "Data de Lançamento",
    changes: "Mudanças",
    newFeature: "Novo",
    bugfix: "Correção",
    improvement: "Melhoria",
    release: "Lançamento",
    fanServerTitle: "SERVIDOR DE FÃS INTERNACIONAL",
    fanServerDesc:
      "Junte-se também ao servidor internacional de fãs do PvZ: Fusion! Uma comunidade global com mais de 400k membros para discussões, compartilhamento de conteúdo e conexão com jogadores do mundo todo.",
    fanServerNote: "Este é um servidor não-oficial mantido pela comunidade de fãs.",
    joinFanServer: "Entrar no Servidor de Fãs",
    socialMedia: "Redes Sociais",
    followUs: "Siga-nos",
    youtube: "YouTube",
    tiktok: "TikTok",
    quickLinks: "Links Rápidos",
    communities: "Comunidades",
    officialCommunity: "Servidor da Equipe",
    fanCommunity: "Comunidade de Fãs",
  },
  en: {
    title: "Plants vs Zombies: Fusion | Guarana Team Edition",
    discordTitle: "OFFICIAL DISCORD SERVER",
    discordDesc:
      "Join our official Discord server, proudly managed by the Guaraná Team — the group behind this project. This is the central hub for downloads, updates, community support, bug reports, and game discussions.",
    discordNote: "Having issues with installation or gameplay? Check the #faq channel before asking for help!",
    importantTitle: "IMPORTANT – BEFORE INSTALLING",
    androidWarning:
      "📱 Android Users: Uninstall your current installation, but DO NOT forget to save your progress first. After that, install our version normally and import your save.",
    pcNote:
      "💻 PC Users: You can safely uninstall previous versions. Your save data will be preserved.",
    backupVideo:
      "▶️ See how to backup on Android here:",
    downloadLinks: "Download Links",
    oldVersions: "Old versions",
    version: "Version",
    platform: "Platform",
    language: "Language",
    download: "Download",
    officialDlcs: "Official DLCs",
    item: "Item",
    authors: "Author(s)",
    dlcNote:
      "Official DLCs are built for the BepInX modloader and are NOT compatible with MelonLoader and its mods. Our current version does not use any modloader as a base, so we have full compatibility with the DLC.",
    credits: "Credits",
    originalDevs: "Original Developers – 蓝飘飘fly's Team",
    guaranaTeam: "Guaraná Team – Project Contributors",
    role: "Role",
    contributor: "Contributor(s)",
    specialThanks: "Special Thanks",
    needHelp: "Need Help?",
    helpText:
      "If you're unsure where to place the game folder, how to install DLCs, or are encountering bugs — head over to our Discord server's #faq and #support channels. We're happy to help you get everything working smoothly!",
    thankYou: "Thank you for supporting PvZ: Fusion and the Guaraná Team 🌱",
    joinDiscord: "Join Discord",
    changelog: "Version History",
    changelogDesc: "Track all updates and improvements to PvZ: Fusion",
    releaseDate: "Release Date",
    changes: "Changes",
    newFeature: "New",
    bugfix: "Bugfix",
    improvement: "Improvement",
    release: "Release",
    fanServerTitle: "INTERNATIONAL FAN SERVER",
    fanServerDesc:
      "Also join the international PvZ: Fusion fan server! A global community with over 400k members for discussions, content sharing, and connecting with players worldwide.",
    fanServerNote: "This is an unofficial server maintained by the fan community.",
    joinFanServer: "Join Fan Server",
    socialMedia: "Social Media",
    followUs: "Follow Us",
    youtube: "YouTube",
    tiktok: "TikTok",
    quickLinks: "Quick Links",
    communities: "Communities",
    officialCommunity: "Team Server",
    fanCommunity: "Fan Community",
  },
  es: {
    title: "Plantas contra Zombis: Fusion | Guarana Team Edition",
    discordTitle: "SERVIDOR OFICIAL DE DISCORD",
    discordDesc:
      "Únete a nuestro servidor oficial de Discord, orgullosamente gestionado por el Guaraná Team — el grupo detrás de este proyecto. Este es el centro principal para descargas, actualizaciones, soporte de la comunidad, reportes de bugs y discusiones del juego.",
    discordNote: "¿Tienes problemas con la instalación o el gameplay? ¡Revisa el canal #faq antes de pedir ayuda!",
    importantTitle: "IMPORTANTE – ANTES DE INSTALAR",
    androidWarning:
      "📱 Usuarios de Android: Desinstala tu instalación actual, pero NO olvides guardar tu progreso primero. Después de eso, instala nuestra versión normalmente e importa tu guardado.",
    pcNote:
      "💻 Usuarios de PC: Puedes desinstalar versiones anteriores de forma segura. Tus datos guardados se preservarán.",
    backupVideo:
      "▶️ Vea cómo hacer backup en Android aquí:",
    downloadLinks: "Enlaces de Descarga",
    oldVersions: "Versiones anteriores",
    version: "Versión",
    platform: "Plataforma",
    language: "Idioma",
    download: "Descarga",
    officialDlcs: "DLCs Oficiales",
    item: "Artículo",
    authors: "Autor(es)",
    dlcNote:
      "Los DLCs oficiales están construidos para el modloader BepInX y NO son compatibles con MelonLoader y sus mods. Nuestra versión actual no utiliza ningún modloader como base, por lo que tenemos total compatibilidad con el DLC.",
    credits: "Créditos",
    originalDevs: "Desarrolladores Originales – Equipo de 蓝飘飘fly",
    guaranaTeam: "Guaraná Team – Contribuidores del Proyecto",
    role: "Rol",
    contributor: "Contribuidor(es)",
    specialThanks: "Agradecimientos Especiales",
    needHelp: "¿Necesitas Ayuda?",
    helpText:
      "Si no estás seguro de dónde colocar la carpeta del juego, cómo instalar DLCs, o estás encontrando bugs — dirígete a los canales #faq y #support de nuestro servidor de Discord. ¡Estamos felices de ayudarte a que todo funcione perfectamente!",
    thankYou: "Gracias por apoyar PvZ: Fusion y al Guaraná Team 🌱",
    joinDiscord: "Unirse a Discord",
    changelog: "Historial de Versiones",
    changelogDesc: "Sigue todas las actualizaciones y mejoras de PvZ: Fusion",
    releaseDate: "Fecha de Lanzamiento",
    changes: "Cambios",
    newFeature: "Nuevo",
    bugfix: "Corrección",
    improvement: "Mejora",
    release: "Lanzamiento",
    fanServerTitle: "SERVIDOR DE FANS INTERNACIONAL",
    fanServerDesc:
      "¡Únete también al servidor internacional de fans de PvZ: Fusion! Una comunidad global con más de 400k miembros para discusiones, compartir contenido y conectar con jugadores de todo el mundo.",
    fanServerNote: "Este es un servidor no oficial mantenido por la comunidad de fans.",
    joinFanServer: "Unirse al Servidor de Fans",
    socialMedia: "Redes Sociales",
    followUs: "Síguenos",
    youtube: "YouTube",
    tiktok: "TikTok",
    quickLinks: "Enlaces Rápidos",
    communities: "Comunidades",
    officialCommunity: "Servidor del Equipo",
    fanCommunity: "Comunidad de Fans",
  },
}

const downloadData = [
  {
    version: "PvZ Fusion 2.8.2 – Guaraná Edition",
    platform: "Windows",
    language: "Português (PT-BR)",
    links: [
      { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
        url: "https://download948.mediafire.com/mfhftgsaaxogkY4SxRGPTDiCXFIPitb_9AA2U8mvFQprNe-PYdEuQtq8mmWrKae_S_5OJM0X2DZE6gx3non6z0xTJZc5YidwwStJ8PBJAygZ663ondmIMWX5YYY6rVfXkkPTHCkB7kKD1T6E4zWR2ZzPihuqiCgW8zAKvDjhSr1iypjG/npovmollbd9v2km/2.8.2+PT-BR+by+Guaran%C3%A1+Team.zip" },
    ]
  },
  {
    version: "PvZ Fusion 2.8.2 – Guaraná Edition",
    platform: "Android",
    language: "Português (PT-BR)",
    links: [
      { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
        url: "https://download1323.mediafire.com/xcjpvw8adypgwli2Z-tlzG4tNYfcElv5NL3UBgnZ0D2Gl2NmUEE-bt2b4RBZSk1iXjn_pfAEKFJQCKGATmB5FHh5Z4bdxaw3UqoMNzh6mQ8pJN5Fz6VPbWLyqszC1U8OqMwZJ8sWOsnGnN5nh1g5w1_7KRFiKr1jc_saUIs1--DI6oS2/n155k1y6c9fvtd6/2.8.2+PT-BR+by+Guaran%C3%A1+Team+%28Android%29.zip" },
    ]
  },
    {
    version: "PvZ Fusion 2.8.2 – Guaraná Edition",
    platform: "Windows",
    language: "English (ENG)",
    links: [
      { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
        url: "https://download1586.mediafire.com/5bugbr6grclgAlfSvb5_AH4XPVI6MU1Q94zAoRq7aUwIp59LgSSoy9yxH0idWgpzihPHjE7pLP8uEHu6lv60wGa7d-uvSkQpVtQg9knzu9vSWI20BzQUnZMyNwAbSCfCvmqRrOboqfilrjIkqDsQAs2zd8ZpoCrvk4Eoitb7u5DcLcyb/33y6uvlxzrp8qzj/2.8.2+ENG+by+Guaran%C3%A1+Team.zip" },
    ]
  },
  {
    version: "PvZ Fusion 2.8.2 – Guaraná Edition",
    platform: "Android",
    language: "English (ENG)",
    links: [
      { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
        url: "https://download1076.mediafire.com/bk59ulmv27ogc4p1iimFhNv7wQV_jkdtG2-ulmPrIT-TCuzCpHXR2a9AJiYhncKr0h3NVYu-H6JTUZW0pXqWdKvtT72HLaTa3MUixCbXQl6rPIQ5HkyfCcOqHm7YJ5Pd_PQTIRqYTnqtD2yJX9xOqs33yk_Sn-Ba9OiZObjKit9CvBtU/db8bs78qzb5o4j8/2.8.2+ENG+by+Guaran%C3%A1+Team+%28Android%29.zip" },
    ]
  },
  {
    version: "PvZ Fusion 2.8.2 – Guaraná Edition",
    platform: "Windows",
    language: "Español (ESP)",
    links: [
      { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
        url: "https://download850.mediafire.com/8gcf1akiukhgG1yTvwipH-pmu_UkygYpXPLZ4B6ANWzfM1MfO_B7jqZFsg9jTXT8xp-I1KMBLPtsoQrCsXb4P7y36sXTiizn-iH4HuXxAqn-y6r_sRf8Qc_jHsG5oDAR8B5HwpEFOflJNOz-alJQBYwRdQgW7t32YM2q-HBjc0zx1g0o/zou140dc0gareyg/2.8.2+ESP+by+Guaran%C3%A1+Team.zip" },
    ]
  },
  {
    version: "PvZ Fusion 2.8.2 – Guaraná Edition",
    platform: "Android",
    language: "Español (ESP)",
    links: [
      { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
        url: "https://download1072.mediafire.com/cjae5md7alhgQKQFXW8SJQIPVV1rrjk5SnGnP4hI7vClVXGmBOR8bx7c41UjlsX9f9HMTxzIMI-WW9y6_lv_6PG0wYKL3PI4RN3X5UTLIQzWsHzteNh-8e2-2voUxIxIiT1QDsdolnPXcAJVKjYkUBo3cWyZxaL9IDGWjDz45bMPzxXj/5ji2znt0kki0ov1/2.8.2+ESP+by+Guaran%C3%A1+Team+%28Android%29.zip" },
    ]
  },
]

const oldVersionsData = [

    {
    versionName: "PvZ Fusion 2.8.1 – Guaraná Edition",
    password: "hypmudonce",
    downloads: [
      {
        platform: "Windows",
        language: "Português (PT-BR)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1323.mediafire.com/dfc9p4anoejg6aNMiZmP5vBfMZJFhPGH6SnDBhvhKx-w00D1ncjFv-S_F4kuIG5bmVS7qpl5rNAx9IE6AcRJrxXmt_Zid0jV1qLfgVwuyXjauS8mqfMn_ynvdJVSUy0QNcEwVm9aecAZ5iP9uYgPAqm7HB9_L7dhfT7xs-IZ0H_ddEr2/lil9gpgp8peede4/2.8.1+PT-BR+by+Guaran%C3%A1+Team.zip" }
        ]
      },
      {
        platform: "Windows",
        language: "English (ENG)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download850.mediafire.com/ckni20574x7gO5h4kBY9dXgdZf1flFR0GKAGADEUhnCtjQk6fcR8iT4P7VXvZroEfUGMm-lZWeBIt5tugR4sWNUovJuDUOnpVnIhmGxu71WG5ymUx_4kAjB7rbR3l8vI6My6GzOsfm1VS7vNSECmrq4CT6irJcjvGW1U6L0M6MqH7Dj-/qh9o41bajdovwi9/2.8.1+ENG+by+Guaran%C3%A1+Team.zip" }
        ]
      },
      {
        platform: "Windows",
        language: "Español (ESP)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1531.mediafire.com/6ntr3rjkfhwgmPRD0-vi6LRPIiLbXk8cKZKsCPZe7MR5fikC0Vcvu6q3Rudj4bnDJiqUyvvK0mPNxpyM2rEVRZC-gC86XNsT44p_da-M1O8kqBdyCRsVO1toOOuMy69VHbUKQ6WXRKjdA0EdA4PjbzMunlR_yFDo6UNN809zsgcIlFeO/tempq4i32epa16o/2.8.1+ESP+by+Guaran%C3%A1+Team.zip" }
        ]
      },
    ],
  },
  
  {
    versionName: "PvZ Fusion 2.7 – Guaraná Edition",
    password: "peasunner",
    downloads: [
      {
        platform: "Windows",
        language: "Português (PT-BR)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download850.mediafire.com/9uz6ybkdsaogz3gCuPo6uGWvJ3Tebugjj1l_S2mby-pY1a4LWGbo6z3NhbhSqt8L3DQwH0xeNkhGVkcaG5DOUoKw5d4OgDaPwYeJ0jRrUBp3jkCSdVVmhPx-nbhsHughDk1O-pysJ0XnfEcSXwTWhfDOj4oy7UDAxezaozpWLkILRz3f/gvy773jqjuv1ayv/2.7+PT-BR+by+Guaran%C3%A1+Team.zip" }
        ]
      },
      {
        platform: "Android",
        language: "Português (PT-BR)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1339.mediafire.com/bz344tsup7ggq8TnbhOOEyLl_t60YvHehcXbRtyF3-oIupBuFHK_XmH2L__KcQQfPJT4j-ieoSi1ZDNlaCh0cV5We_lVmUXjlbMDtn_8dXQnA2Dn9AHTTsCtXayZOvjPDzxYMiArJRblCJ_WBHcSa1spoGDDx3NNyaclrVO8GxuMPR6s/lbnhow6atn6kwnb/2.7+PT-BR+by+Guaran%C3%A1+Team+%28Android%29.zip" }
        ]
      },
      {
        platform: "Windows",
        language: "Español (ESP)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1078.mediafire.com/de7q0ubwzapgA6E3AwWgXJwOMOk6AS3lMIvyPbvVT3c4T_RkdR1de06Wgnj67RGqP1W_650MFSGM6P90ymZjXzPHr6K-KgBWQJWaSgTjad6c8WIUGe-09DsAEpTki91vRC4xiy2V3YuciYFq4l6NOteLNrDjBiqxMSF8VcCZK_9YJVxu/6kzcovwue451bne/2.7+ESP+by+Guaran%C3%A1+Team.zip" }
        ]
      },
      {
        platform: "Android",
        language: "Español (ESP)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1072.mediafire.com/k7g2505ot24g08TejawUHqEbo52C7pe3DXq4fG7cJ9Tr4TZ3jXgeSoKeAaPblEgGtaxQvv7pxa42EM4Makdbn1XUv9FjJVO1XSbrkssDC-cfVvQFMpQqqgJqgGkLwhPsX_PYedpuakU2SDaMXWEOrnYsLphmunvSGeHUfFS5VnswmOYl/rjvhajln5a9zgi2/2.7+ESP+by+Guaran%C3%A1+Team+%28Android%29.zip" }
        ]
      },
    ],
  },
  {
    versionName: "PvZ Fusion 2.6.1 – Guaraná Edition",
    downloads: [
      {
        platform: "Windows",
        language: "Português (PT-BR)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1589.mediafire.com/h8tmcsprkarg9aYvhB6dBE319GFO9TrAn6_8QS6qYdMzgyL6iGsnQRUeZBH-i9JvLllVS47TX_oBSDMnxAEg6LveNq3QQdGA-xVBT8YSdILUncfoMzKH-mfJG3A7tl7_8ne4Ovb7XWdpqzuSYtykc1zGM4ixpB4tbRSlMP_eOsi684Ir/pntfcic26u8hrfe/2.6.1+PT-BR+by+Guaran%C3%A1+Team.zip" },
        ],
      },
      {
        platform: "Android",
        language: "Português (PT-BR)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1509.mediafire.com/ika6x2nr18kgDPBr85o58Y_i38GOupQ_44hrB2vT72a3NU9Iw8emS1CG4NjlEI0Dz0qTHdbAc47iCyZaFtNEy0mrvL5PqVFxQafeFMvtx_rjrKQi1ACvKNQfBPwlhS2mjFnGDAkmxVKXV2_5EhGt_EeNRaqx-_Sm-uhubA1K50XDnWzn/zdtc7hv5nuoizbu/2.6.1+PT-BR+by+Guaran%C3%A1+Team+%28Android%29.zip" },
        ],
      },
      {
        platform: "Windows",
        language: "English (ENG)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1326.mediafire.com/9ztogvp3lwlgw4PSlQrz1NTm2zPI3kkB0EAV-C7ABmi-1wNIA7xEHupAKTzz7Fcrfhx8GgNhZhHrk6jbl-8ZSHfioqW50IuTdlQEfH-hDIClpiptAdnl8ybjW5Hfr9WPxaOWZyC-NaVIfxwMCb_l-VyczVFOvXtHLaITsW5ZkkyvTDoY/3yqfj2i67za4s7c/2.6.1+ENG+by+Guaran%C3%A1+Team.zip" },
        ],
      },
      {
        platform: "Android",
        language: "English (ENG)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1507.mediafire.com/6o0t3ujc0gfgqZYBKDFVWy5tpNf9NX1GEjrDwZGhSPH2pTrzY-MrU5echZFO9zQxiRjlZvok6i0Q9FGWH43QX_NDXAEA3KBBTT2TO06LMapVNMzxY4Hg9sBCvpIxyC-wWlIdlIDFwui0LwpeMH5-6GjZgE2H3b70n6_DEB5dD3lTpiUs/ndbnck9qvt26hch/2.6.1+ENG+by+Guaran%C3%A1+Team+%28Android%29.zip" },
        ],
      },
      {
        platform: "Windows",
        language: "Español (ESP)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download851.mediafire.com/k4vh747dd88gpczM5guUDhH1HmQ67dM7mjV5zHkHFF3HgT-Ht3_S1GmBXlgi9qyrNbFrf-EJJHS4wV20Z251L5LDOchuzuqpVPJM0hj1wedn9leEZ_NQd5xHsznSFO9NLcZB8U5hM48krdqL_yAaWEdNtM3tdB2XVrqjqHNzisXBcta-/8rcspvk7b7dr07q/2.6.1+ESP+by+Guaran%C3%A1+Team.zip" },
        ],
      },
      {
        platform: "Android",
        language: "Español (ESP)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1320.mediafire.com/u4co5jtwqgsgttw5p2G_opTxT_oKASkZWHA5LQwknKue-KheBphVq1ojbXUsd9KqD_YmtzNdIHU30W46MxyLT8vA-jKNOVvXZBE9MfqN3VVmLBR0FuTobOOzScey9pgAREDdHlhABGe42nsDXeOPNx6oKuqBzQU_7yWv-eMSHyDfVRIF/42q9lym6z2u94wr/2.6.1+ESP+by+Guaran%C3%A1+Team+%28Android%29.zip" },
        ],
      },
    ],
  },
  {
    versionName: "PvZ Fusion 2.5.1 – Guaraná Edition",
    downloads: [
      {
        platform: "Windows",
        language: "Português (PT-BR)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download1507.mediafire.com/f7lwvh1xrpzg6rJ9N1SAuzZatbVaIVCkqjo3XPwSz2_MCJKlXbCEO3fOs3ZxQ1Tf3U9boMjdR8uV5Eype9Okw2pjXibQ1i6OR64HTcWx3orJv9Z8mbji7G_9cBIOmAd455qonYuVrHUq912B9IqOIf6sxpy__4NeI5qI167gnObto7Vm/sf27jkh8vdmpzg4/2.5.1+PT-BR+by+Guaran%C3%A1+Team.zip" },
        ],
      },
      {
        platform: "Android",
        language: "Português (PT-BR)",
        links: [
          { className: "bg-blue-600 hover:bg-blue-700 text-white", name: "Download", 
            url: "https://download943.mediafire.com/ag3bti2s8rugCEPAMPWMZA_MLZKemosGUcQmpQ86BXXSZSTg0VvD0CEafr0goX7IuNG2lWMbabno1fpiVOkpWML5EyWC3S4EDo7u75mofylqDbNDfUEj1113SedzTev1-0c02UDjHVEvcB1Ml6MgQsHrWbrheRURcJgjmKXH54q4AAua/a8ku1k6wpqoy23u/2.5.1+PT-BR+by+Guaran%C3%A1+Team+%28Android%29.zip" },
        ],
      },
    ],
  },
];

const dlcData = [
  {
    item: "SniperPlus DLC (Installer) – v2.5.1",
    authors: "高数带我飞, 机鱼",
    platform: "Windows",
    link: "https://download1479.mediafire.com/qmidmzqmdwogNDAEdxUhIO3xqE1HKrLvcuU2ETGFoORRye8OmSDDzbE7pHSFGV4x_09DDfzEdd1PnGm8_2BTkGiYCP_Kwvwu1PDaprD5zENEFKUi5fHn6dPzrSk6FNTKKaXIscmtppTsxP-Lw1iVz7IyI3CXc2Ihy6vvHdqwDN9eKxc/rh2y863ndm6hcjn/MoreSniper-2.5.zip",
  },
]

const originalTeamData = [
  { role: "Programming & Direction", contributor: "蓝飘飘fly" },
  { role: "Animation", contributor: "蓝飘飘fly, 机鱼" },
  { role: "Art & Visual Direction", contributor: "蓝飘飘fly" },
  { role: "Video Editing", contributor: "蓝飘飘fly, 梦珞" },
  { role: "Animation Support", contributor: "机鱼, 蓝蝶" },
  { role: "Art Support", contributor: "蓝蝶" },
]

const guaranaTeamData = [
  { name: "Bioxcis", role: "Project Leader, Texture Editor, Coder, Translator" },
  { name: "Shel", role: "Co-Leader, Coder, Builder, Texture Editor, Translator" },
  { name: "Casius", role: "Translator" },
  { name: "Dgamer", role: "Playtester, Creative, Helper" },
  { name: "Yorichi - 赖一", role: "Translator" },
  { name: "YoriIchi - マノリック", role: "Fullstack Developer e Web Designer" },
]

const changelogData = [
  {
    version: "2.8.2",
    date: "2025/08/20",
    changes: [
      {
        type: "release",
        text: {
          pt: "Lançamento do PvZ Fusion Guaraná Edition - Português,Inglês e Espanhol (Ver. 1)",
          en: "Release of PvZ Fusion Guaraná Edition - Portuguese,English and Spanish (Ver. 1)",
          es: "Lanzamiento de PvZ Fusion Guaraná Edition - Portugués,Inglés y Español (Ver. 1)",
        },
      },
    ],
  },
  {
    version: "2.8.1",
    date: "2025/08/16",
    changes: [
      {
        type: "release",
        text: {
          pt: "Lançamento do PvZ Fusion Guaraná Edition - Português,Inglês e Espanhol (Ver. 1)",
          en: "Release of PvZ Fusion Guaraná Edition - Portuguese,English and Spanish (Ver. 1)",
          es: "Lanzamiento de PvZ Fusion Guaraná Edition - Portugués,Inglés y Español (Ver. 1)",
        },
      },
    ],
  },
  {
    version: "2.7",
    date: "2025/07/24",
    changes: [
      {
        type: "release",
        text: {
          pt: "Lançamento do PvZ Fusion Guaraná Edition - Português e Espanhol (Ver. 1)",
          en: "Release of PvZ Fusion Guaraná Edition - Portuguese and Spanish (Ver. 1)",
          es: "Lanzamiento de PvZ Fusion Guaraná Edition - Portugués y Español (Ver. 1)",
        },
      },
    ],
  },
  {
    version: "2.6.1",
    date: "2025/06/02",
    changes: [
      {
        type: "release",
        text: {
          pt: "Lançamento do PvZ Fusion Guaraná Edition - Português,Inglês e Espanhol (Ver. 1)",
          en: "Release of PvZ Fusion Guaraná Edition - Portuguese,English and Spanish (Ver. 1)",
          es: "Lanzamiento de PvZ Fusion Guaraná Edition - Portugués,Inglés y Español (Ver. 1)",
        },
      },
    ],
  },
  {
    version: "2.6.1",
    date: "2025/06/28",
    changes: [
      {
        type: "release",
        text: {
          pt: "Lançamento do PvZ Fusion Guaraná Edition - Espanhol e Inglês (Ver. 1)",
          en: "Release of PvZ Fusion Guaraná Edition - Spanish and English (Ver. 1)",
          es: "Lanzamiento de PvZ Fusion Guaraná Edition - Español y Inglés (Ver. 1)",
        },
      },
    ],
  },
  {
    version: "2.5.1",
    date: "2025/05/27",
    changes: [
      {
        type: "release",
        text: {
          pt: "Lançamento do PvZ Fusion Guaraná Edition - Português (Ver. 1)",
          en: "Release of PvZ Fusion Guaraná Edition - Portuguese (Ver. 1)",
          es: "Lanzamiento de PvZ Fusion Guaraná Edition - Portugués (Ver. 1)",
        },
      },
    ],
  },
]

export default function PvZFusionSite() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState<"pt" | "en" | "es">("en")

  const [isCopied, setIsCopied] = useState(false);
  const password = "hypmudonce";

  const handleCopyPassword = async (passwordOverride: string) => {
    const textToCopy = passwordOverride || password;
    try {
      if (!textToCopy) {
        console.error('Nenhuma senha fornecida para cópia.');
        return;
      }
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar a senha: ', err);
    }
  };

  useEffect(() => {
    const userLang = navigator.language;
    const primaryLang = userLang.split("-")[0];

    if (primaryLang === "pt") {
      setLanguage("pt");
    } else if (primaryLang === "es") {
      setLanguage("es");
    }
    // console.log(primaryLang);
  }, []);

  const t = translations[language]

  const bannerPath = `/banner${language !== "pt" ? `-${language}` : ""}.png`

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const pad = (n: number) => n.toString().padStart(2, "0")

    switch (language) {
      case "en":
        return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`
      case "pt":
      case "es":
      default:
        return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`
    }
  }

  const getPlatformBadgeClasses = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "windows":
        return "bg-transparent text-blue-800 border border-blue-600";
      case "android":
        return "bg-transparent text-green-800 border border-green-600";
      default:
        return "bg-transparent text-gray-800 border border-gray-600";
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/icon.png" alt="PvZ Fusion Icon" className="w-8 h-8" />
            <span className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">PvZ: Fusion</span>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>🇧🇷 Português</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>🇺🇸 English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>🇪🇸 Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" onClick={toggleTheme} className="w-[100px]">
              {isDark ? (
                <> <Sun className="h-4 w-4 mr-2" /> <span>Dark</span> </>
              ) : (
                <> <Moon className="h-4 w-4 mr-2" /> <span>Light</span> </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 space-y-8 mt-5">
        {/* Title */}
        <div className="text-center space-y-6">
          <div className="relative">
            <img
              src={bannerPath}
              alt="Plants vs Zombies Fusion Banner"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
        </div>

        {/* Discord Alert */}
        <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">{t.discordTitle}</h3>
              <p className="text-sm">{t.discordDesc}</p>
              <p className="text-sm font-medium">{t.discordNote}</p>
              <Button asChild size="sm" className="mt-2 bg-white text-black border border-black hover:bg-gray-100 dark:bg-blue-950 dark:text-white dark:border-white dark:hover:bg-blue-700">
                <a href="https://discord.gg/rRUuTmn2MP" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t.joinDiscord}
                </a>
              </Button>
            </div>
          </AlertDescription>
        </Alert>

        {/* Fan Server Alert */}
        <Alert className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950">
          <Users className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200">{t.fanServerTitle}</h3>
              <p className="text-sm">{t.fanServerDesc}</p>
              <p className="text-xs text-purple-700 dark:text-purple-300 italic">{t.fanServerNote}</p>
              <Button asChild size="sm" variant="outline" className="mt-2 bg-white text-black border border-black hover:bg-gray-100 dark:bg-purple-950 dark:text-white dark:border-white dark:hover:bg-purple-700">
                <a href="https://discord.gg/pvzfusion" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t.joinFanServer}
                </a>
              </Button>
            </div>
          </AlertDescription>
        </Alert>

        {/* Installation Warning */}
        <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <h3 className="font-semibold text-orange-800 dark:text-orange-200">{t.importantTitle}</h3>
              <p className="text-sm">{t.androidWarning}</p>
              <p className="text-sm">{t.backupVideo} <a
                href="https://www.youtube.com/watch?v=RzTLKipgK9c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >YouTube – Android Backup</a>
              </p>
              <p className="text-sm">{t.pcNote}</p>
            </div>
          </AlertDescription>
        </Alert>

        {/* Download Links */}
        <Card id="download">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              {t.downloadLinks}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <Megaphone className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertDescription className="space-y-4 text-sm">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">
                  {language === "pt" ? "Para Criadores de Conteúdo" : language === "en" ? "For Content Creators" : "Para Creadores de Contenido"}
                </h3>
                <p>
                  {language === "pt" ? "Adoramos seu conteúdo, sério mesmo! Mas pedimos que, por favor, direcione seus seguidores para esta página ao invés de usar o link de download direto." : language === "en" ? "We love your content, seriously! But, please direct your followers to this page instead of using the direct download link." : "¡Nos encanta tu contenido, en serio! Pero, por favor, dirige a tus seguidores a esta página en lugar de usar el enlace de descarga directa."}
                </p>
                <p className="font-semibold">
                  {language === "pt" ? "Isso garante a versão mais recente para todos, melhor segurança para o usuário e nos ajuda a manter o projeto vivo. Agradecemos pela ajuda!" : language === "en" ? "This ensures everyone gets the latest version, better security for the user and helps us keep the project alive. Your help is appreciated!" : "Esto asegura que todos obtengan la última versión, mayor seguridad para el usuario y nos ayuda a mantener el proyecto vivo. ¡Agradecemos por la ayuda!"}
                </p>
              </AlertDescription>
            </Alert>

<br/>
<br/>

            <div className="max-w-full overflow-hidden">
              {/* Versão para desktop */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t.version}</TableHead>
                      <TableHead>{t.platform}</TableHead>
                      <TableHead>{t.language}</TableHead>
                      <TableHead>{t.download}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {downloadData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.version}</TableCell>
                        <TableCell>
                          <Badge className={getPlatformBadgeClasses(item.platform)}>
                            {item.platform}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.language}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            {item.links.map((linkInfo, linkIndex) => (
                              <Button asChild size="sm" key={linkIndex} className={linkInfo.className}>
                                <a href={linkInfo.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  {linkInfo.name}
                                </a>
                              </Button>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Versão para celular */}
              <div className="md:hidden space-y-4">
                {downloadData.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-2">
                      <div className="font-medium">{item.version}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t.platform}:</span>
                        <Badge className={getPlatformBadgeClasses(item.platform)}>
                          {item.platform}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t.language}:</span>
                        <span>{item.language}</span>
                      </div>
                      <div className="flex flex-col gap-2 pt-2">
                        {item.links.map((linkInfo, linkIndex) => (
                          <Button asChild size="sm" key={linkIndex} className={linkInfo.className}>
                            <a href={linkInfo.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {linkInfo.name}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Old Links */}
        <Card id="old-versions">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              {t.oldVersions}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {oldVersionsData.map((versionData) => (
                <AccordionItem value={versionData.versionName} key={versionData.versionName} className="border-b">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-lg font-medium transition-all hover:no-underline">
                    {versionData.versionName}
                  </AccordionTrigger>
                  <AccordionContent>
                    {versionData.password && (
                      <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 my-5">
                        <Megaphone className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <AlertDescription className="w-full space-y-2 text-sm">
                          <h3 className="font-semibold text-green-800 dark:text-green-200">
                            {language === "pt" ? "Senha para extrair os arquivos:" : language === "en" ? "Password to extract files:" : "Contraseña para extraer los archivos:"}
                          </h3>
                          <div className="flex w-full items-center gap-2 rounded-lg bg-green-100 p-2 dark:bg-green-900/50">
                            <code className="flex-grow select-all font-mono text-base text-green-900 dark:text-green-200">
                              {versionData.password}
                            </code>
                            <Button variant="ghost" size="icon" onClick={() => handleCopyPassword(versionData.password)} className="h-8 w-8 shrink-0 hover:bg-green-950">
                              <span className="sr-only">Copy</span>
                              {isCopied ? (
                                <Check className="h-5 w-5 text-emerald-500" />
                              ) : (
                                <Copy className="h-5 w-5" />
                              )}
                            </Button>
                          </div>
                        </AlertDescription>
                      </Alert>
                    )}
                    <div className="max-w-full overflow-hidden">
                      <div className="hidden md:block">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>{t.language}</TableHead>
                              <TableHead>{t.platform}</TableHead>
                              <TableHead>{t.download}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {versionData.downloads.map((item, dlIndex) => (
                              <TableRow key={dlIndex}>
                                <TableCell>{item.language}</TableCell>
                                <TableCell>
                                  <Badge className={getPlatformBadgeClasses(item.platform)}>
                                    {item.platform}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex flex-wrap gap-2">
                                    {item.links.map((linkInfo, linkIndex) => (
                                      <Button asChild size="sm" key={linkIndex} className={linkInfo.className}>
                                        <a href={linkInfo.url} target="_blank" rel="noopener noreferrer">
                                          <ExternalLink className="h-4 w-4 mr-2" />
                                          {linkInfo.name}
                                        </a>
                                      </Button>
                                    ))}
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="md:hidden space-y-4">
                        {versionData.downloads.map((item, index) => (
                          <Card key={index} className="p-4 bg-muted/50">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">{t.platform}:</span>
                                <Badge className={getPlatformBadgeClasses(item.platform)}>
                                  {item.platform}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">{t.language}:</span>
                                <span>{item.language}</span>
                              </div>
                              <div className="flex flex-col gap-2 pt-2">
                                {item.links.map((linkInfo, linkIndex) => (
                                  <Button asChild size="sm" key={linkIndex} className={linkInfo.className}>
                                    <a href={linkInfo.url} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      {linkInfo.name}
                                    </a>
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Official DLCs */}
        <Card>
          <CardHeader>
            <CardTitle>{t.officialDlcs}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-full overflow-hidden">
              {/* Versão para desktop */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t.item}</TableHead>
                      <TableHead>{t.authors}</TableHead>
                      <TableHead>{t.platform}</TableHead>
                      <TableHead>{t.download}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dlcData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell>{item.authors}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{item.platform}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Download
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Versão para celular */}
              <div className="md:hidden space-y-4">
                {dlcData.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-2">
                      <div className="font-medium">{item.item}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t.authors}:</span>
                        <span>{item.authors}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{t.platform}:</span>
                        <Badge variant="secondary">{item.platform}</Badge>
                      </div>
                      <Button asChild size="sm" className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm">{t.dlcNote}</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Changelog */}
        <Card id="changelog">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              {t.changelog}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{t.changelogDesc}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {changelogData.map((release, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
                    {t.version} {release.version}
                  </h3>
                  <Badge variant="outline" className="w-fit">
                    {formatDate(release.date)}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {release.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex items-start gap-2">
                      <Badge
                        variant={
                          change.type === "newFeature"
                            ? "default"
                            : change.type === "bugfix"
                              ? "destructive"
                              : change.type === "release"
                                ? "outline"
                                : "secondary"
                        }
                        className="text-xs mt-0.5"
                      >
                        {change.type === "newFeature"
                          ? t.newFeature
                          : change.type === "bugfix"
                            ? t.bugfix
                            : change.type === "release"
                              ? t.release
                              : t.improvement}
                      </Badge>
                      <p className="text-sm text-muted-foreground flex-1">{change.text[language]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Credits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              {t.credits}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Guaraná Team */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">{t.guaranaTeam}</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {guaranaTeamData.map((member, index) => (
                  <Card key={index} className="p-4">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>{t.specialThanks}:</strong> NickZin⁰⁰⁶, Prats, Jaegerx2, Xelag_Xear, đoánxem
              </p>
            </div>
            {/* Original Developers */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                <a
                  href="https://space.bilibili.com/3546619314178489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 hover:underline"
                >
                  {t.originalDevs}
                </a>
              </h3>
              <div className="max-w-full overflow-hidden">
                {/* Versão para desktop */}
                <div className="hidden md:block overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t.role}</TableHead>
                        <TableHead>{t.contributor}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {originalTeamData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.role}</TableCell>
                          <TableCell>{item.contributor}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Versão para celular */}
                <div className="md:hidden space-y-4">
                  {originalTeamData.map((item, index) => (
                    <Card key={index} className="p-4">
                      <div className="space-y-2">
                        <div className="font-medium">{item.role}</div>
                        <div className="text-sm">{item.contributor}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card>
          <CardHeader>
            <CardTitle>{t.needHelp}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">{t.helpText}</p>
            <Button asChild className="bg-white text-black border border-black hover:bg-gray-100 dark:bg-black dark:text-white dark:border-white dark:hover:bg-zinc-800">
              <a href="https://discord.gg/rRUuTmn2MP" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                {t.joinDiscord}
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Social Media Section */}
        <Card id="social">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              {t.socialMedia}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.youtube.com/@bioxcis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              >
                <div className="p-3 bg-red-600 rounded-full mr-4">
                  <Youtube className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">YouTube</h3>
                  <p className="text-sm text-muted-foreground">@bioxcis</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
              </a>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer - now outside main container */}
      <footer className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border-t border-green-200 dark:border-green-800 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/icon.png" alt="PvZ Fusion Icon" className="w-8 h-8" />
                <span className="text-xl font-bold text-green-600 dark:text-green-400">Guaraná Team</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === "pt"
                  ? "Guaraná Team Translators é uma equipe de tradução independente brasileira que tem como objetivo facilitar o entendimento do jogo PvZ: Fusion para jogadores de diferentes idiomas ao redor do mundo."
                  : language === "en"
                    ? "Guaraná Team Translators is an independent Brazilian translation team that aims to facilitate understanding of the PvZ: Fusion game for players of different languages around the world."
                    : "Guaraná Team Translators es un equipo de traducción independiente brasileño que tiene como objetivo facilitar la comprensión del juego PvZ: Fusion para jugadores de diferentes idiomas alrededor del mundo."}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
                {language === "pt" ? "Links Rápidos" : language === "en" ? "Quick Links" : "Enlaces Rápidos"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://discord.gg/rRUuTmn2MP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <MessageCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.officialCommunity}</div>
                  </div>
                </a>

                <a
                  href="https://discord.gg/pvzfusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                    <Users className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.fanCommunity}</div>
                  </div>
                </a>

                <a
                  href="#download"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-200 group scroll-smooth"
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <Download className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.downloadLinks}</div>
                  </div>
                </a>

                <a
                  href="#changelog"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-200 group scroll-smooth"
                >
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                    <Info className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.changelog}</div>
                  </div>
                </a>

                <a
                  href="https://space.bilibili.com/3546619314178489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/50 transition-colors">
                    <ExternalLink className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Bilibili</div>
                  </div>
                </a>

                <a
                  href="#social"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-200 group scroll-smooth"
                >
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                    <Globe className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.socialMedia}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-200 dark:border-green-800 mt-8 pt-8 flex flex-col text-center md:text-left md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>
                {language === "pt" ? "Feito com" : language === "en" ? "Made with" : "Hecho con"} ❤️{" "}
                {language === "pt" ? "pela" : language === "en" ? "by" : "por"} Guaraná Team
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Guaraná Team.{" "}
              {language === "pt"
                ? "Todos os direitos reservados."
                : language === "en"
                  ? "All rights reserved."
                  : "Todos los derechos reservados."}
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              {language === "pt" ? "Desenvolvido por" : language === "en" ? "Developed by" : "Desarrollado por"}{" "}
              <a
                href="https://github.com/tarsomonrroy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-600/90 dark:text-green-400/90 hover:underline"
              >
                Tarso Monrroy
              </a>
              {language === "pt" ? " ," : language === "en" ? " and" : " y"}{" "}
              <a
                href="https://github.com/SheldonCastro"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-600/90 dark:text-green-400/90 hover:underline"
              >
                Sheldon
              </a>
              {language === "pt" ? " e" : language === "en" ? " and" : " y"}{" "}
              <a
                href="https://github.com/ManoRicck"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-600/90 dark:text-green-400/90 hover:underline"
              >
                YoriIchi - マノリック
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
