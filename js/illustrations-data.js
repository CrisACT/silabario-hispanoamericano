/**
 * SILABARIO HISPANOAMERICANO — Ilustraciones Originales
 * Extraídas del PDF de la 10ª Edición (1955) de Adrián Dufflocq Galdames.
 *
 * Cómo usar:
 *   <img src={ILLUSTRATIONS.leccion_01_p.main} alt="pipa" />
 *
 * Todas las rutas son relativas a la raíz del proyecto.
 * Copiar la carpeta `assets/ilustraciones/` al proyecto.
 */

const ILLUSTRATIONS = {

  // ──────────────────────────────────────────────────────
  // PORTADA Y RECURSOS GENERALES
  // ──────────────────────────────────────────────────────
  portada: {
    main: "assets/ilustraciones/portada/portada.png",
    descripcion: "Portada original del Silabario Hispanoamericano a color",
  },

  banderas: {
    grupo1: "assets/ilustraciones/banderas/banderas_grupo1.png",
    grupo2: "assets/ilustraciones/banderas/banderas_grupo2.png",
    descripcion: "Banderas de los países hispanoamericanos",
    paises_grupo1: ["Argentina","Bolivia","Colombia","Costa Rica","Cuba","Chile","República Dominicana","Ecuador","El Salvador"],
    paises_grupo2: ["Guatemala","Honduras","México","Nicaragua","Panamá","Paraguay","Perú","Uruguay","Venezuela","España"],
  },

  alfabeto: {
    main: "assets/ilustraciones/recursos/alfabeto_completo.png",
    descripcion: "El alfabeto completo en letra imprenta y cursiva",
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 0 — LAS VOCALES
  // ──────────────────────────────────────────────────────
  leccion_00_vocales: {
    main: "assets/ilustraciones/leccion_00_vocales/vocales_ilustracion.png",
    descripcion: "Niños con patos y los bloques a-e-i-o-u",
    uso: "Mostrar al introducir las vocales",
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 1 — LA P
  // ──────────────────────────────────────────────────────
  leccion_01_p: {
    main:          "assets/ilustraciones/leccion_01_p/p_pipa.png",
    tablero:       "assets/ilustraciones/leccion_01_p/p_tablero.png",
    papa_tuberculo:"assets/ilustraciones/leccion_01_p/p_papa_img.png",
    pepe:          "assets/ilustraciones/leccion_01_p/p_pepe_img.png",
    pipo:          "assets/ilustraciones/leccion_01_p/p_pipo_img.png",
    papa_hombre:   "assets/ilustraciones/leccion_01_p/p_papa_hombre.png",
    rieles:        "assets/ilustraciones/leccion_01_p/p_rieles.png",
    // Mapa de palabra → imagen
    palabras: {
      "pipa":  "assets/ilustraciones/leccion_01_p/p_pipa.png",
      "papa":  "assets/ilustraciones/leccion_01_p/p_papa_img.png",
      "Pepe":  "assets/ilustraciones/leccion_01_p/p_pepe_img.png",
      "papá":  "assets/ilustraciones/leccion_01_p/p_papa_hombre.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 2 — LA L
  // ──────────────────────────────────────────────────────
  leccion_02_l: {
    main:    "assets/ilustraciones/leccion_02_l/l_ala.png",
    tablero: "assets/ilustraciones/leccion_02_l/l_tablero.png",
    palo:    "assets/ilustraciones/leccion_02_l/l_palo.png",
    pila:    "assets/ilustraciones/leccion_02_l/l_pila.png",
    pala:    "assets/ilustraciones/leccion_02_l/l_pala_img.png",
    palabras: {
      "ala":  "assets/ilustraciones/leccion_02_l/l_ala.png",
      "palo": "assets/ilustraciones/leccion_02_l/l_palo.png",
      "pila": "assets/ilustraciones/leccion_02_l/l_pila.png",
      "pala": "assets/ilustraciones/leccion_02_l/l_pala_img.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 3 — LA M
  // ──────────────────────────────────────────────────────
  leccion_03_m: {
    main:       "assets/ilustraciones/leccion_03_m/m_mula.png",
    tablero:    "assets/ilustraciones/leccion_03_m/m_tablero.png",
    mapa:       "assets/ilustraciones/leccion_03_m/m_mapa.png",
    paloma:     "assets/ilustraciones/leccion_03_m/m_paloma.png",
    corazones:  "assets/ilustraciones/leccion_03_m/m_corazones.png",
    palabras: {
      "mula":   "assets/ilustraciones/leccion_03_m/m_mula.png",
      "mapa":   "assets/ilustraciones/leccion_03_m/m_mapa.png",
      "paloma": "assets/ilustraciones/leccion_03_m/m_paloma.png",
      "mamá":   "assets/ilustraciones/leccion_03_m/m_corazones.png",
      "papá":   "assets/ilustraciones/leccion_03_m/m_corazones.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 4 — LA D
  // ──────────────────────────────────────────────────────
  leccion_04_d: {
    main:    "assets/ilustraciones/leccion_04_d/d_dado.png",
    tablero: "assets/ilustraciones/leccion_04_d/d_tablero.png",
    dedo_animal: "assets/ilustraciones/leccion_04_d/d_dedo_img.png",
    palabras: {
      "dado": "assets/ilustraciones/leccion_04_d/d_dado.png",
      "dedo": "assets/ilustraciones/leccion_04_d/d_dedo_img.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 5 — LA T
  // ──────────────────────────────────────────────────────
  leccion_05_t: {
    main:    "assets/ilustraciones/leccion_05_t/t_tomate.png",
    tablero: "assets/ilustraciones/leccion_05_t/t_tablero.png",
    pato:    "assets/ilustraciones/leccion_05_t/t_pato.png",
    maleta:  "assets/ilustraciones/leccion_05_t/t_maleta.png",
    palabras: {
      "tomate": "assets/ilustraciones/leccion_05_t/t_tomate.png",
      "pato":   "assets/ilustraciones/leccion_05_t/t_pato.png",
      "maleta": "assets/ilustraciones/leccion_05_t/t_maleta.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 6 — LA C
  // ──────────────────────────────────────────────────────
  leccion_06_c: {
    main:  "assets/ilustraciones/leccion_06_c/c_cama.png",
    copa:  "assets/ilustraciones/leccion_06_c/c_copa.png",
    cucu:  "assets/ilustraciones/leccion_06_c/c_cucu.png",
    palabras: {
      "cama": "assets/ilustraciones/leccion_06_c/c_cama.png",
      "copa": "assets/ilustraciones/leccion_06_c/c_copa.png",
      "cucú": "assets/ilustraciones/leccion_06_c/c_cucu.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 7 — LA S
  // ──────────────────────────────────────────────────────
  leccion_07_s: {
    main:   "assets/ilustraciones/leccion_07_s/s_sapo.png",
    osito:  "assets/ilustraciones/leccion_07_s/s_osito.png",
    saco:   "assets/ilustraciones/leccion_07_s/s_saco.png",
    palabras: {
      "sapo":  "assets/ilustraciones/leccion_07_s/s_sapo.png",
      "osito": "assets/ilustraciones/leccion_07_s/s_osito.png",
      "saco":  "assets/ilustraciones/leccion_07_s/s_saco.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 8 — LA N
  // ──────────────────────────────────────────────────────
  leccion_08_n: {
    main:  "assets/ilustraciones/leccion_08_n/n_nido.png",
    mano:  "assets/ilustraciones/leccion_08_n/n_mano.png",
    mono:  "assets/ilustraciones/leccion_08_n/n_mono.png",
    nudo:  "assets/ilustraciones/leccion_08_n/n_nudo.png",
    palabras: {
      "nido": "assets/ilustraciones/leccion_08_n/n_nido.png",
      "mano": "assets/ilustraciones/leccion_08_n/n_mano.png",
      "mono": "assets/ilustraciones/leccion_08_n/n_mono.png",
      "nudo": "assets/ilustraciones/leccion_08_n/n_nudo.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 9 — LA J
  // ──────────────────────────────────────────────────────
  leccion_09_j: {
    main:   "assets/ilustraciones/leccion_09_j/j_ojo.png",
    conejo: "assets/ilustraciones/leccion_09_j/j_conejo.png",
    tinaja: "assets/ilustraciones/leccion_09_j/j_tinaja.png",
    palabras: {
      "ojo":    "assets/ilustraciones/leccion_09_j/j_ojo.png",
      "conejo": "assets/ilustraciones/leccion_09_j/j_conejo.png",
      "tinaja": "assets/ilustraciones/leccion_09_j/j_tinaja.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 10 — LA B
  // ──────────────────────────────────────────────────────
  leccion_10_b: {
    main:    "assets/ilustraciones/leccion_10_b/b_bota.png",
    bote:    "assets/ilustraciones/leccion_10_b/b_bote.png",
    abanico: "assets/ilustraciones/leccion_10_b/b_abanico.png",
    palabras: {
      "bota":    "assets/ilustraciones/leccion_10_b/b_bota.png",
      "bote":    "assets/ilustraciones/leccion_10_b/b_bote.png",
      "abanico": "assets/ilustraciones/leccion_10_b/b_abanico.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 11 — LA V
  // ──────────────────────────────────────────────────────
  leccion_11_v: {
    main:  "assets/ilustraciones/leccion_11_v/v_vaca.png",
    vaso:  "assets/ilustraciones/leccion_11_v/v_vaso.png",
    nave:  "assets/ilustraciones/leccion_11_v/v_nave.png",
    palabras: {
      "vaca": "assets/ilustraciones/leccion_11_v/v_vaca.png",
      "vaso": "assets/ilustraciones/leccion_11_v/v_vaso.png",
      "nave": "assets/ilustraciones/leccion_11_v/v_nave.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 12 — LA F
  // ──────────────────────────────────────────────────────
  leccion_12_f: {
    main:     "assets/ilustraciones/leccion_12_f/f_foca.png",
    sofa:     "assets/ilustraciones/leccion_12_f/f_sofa.png",
    telefono: "assets/ilustraciones/leccion_12_f/f_telefono.png",
    palabras: {
      "foca":     "assets/ilustraciones/leccion_12_f/f_foca.png",
      "sofá":     "assets/ilustraciones/leccion_12_f/f_sofa.png",
      "teléfono": "assets/ilustraciones/leccion_12_f/f_telefono.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 13 — LA LL
  // ──────────────────────────────────────────────────────
  leccion_13_ll: {
    main:    "assets/ilustraciones/leccion_13_ll/ll_llave.png",
    silla:   "assets/ilustraciones/leccion_13_ll/ll_silla.png",
    camello: "assets/ilustraciones/leccion_13_ll/ll_camello.png",
    palabras: {
      "llave":   "assets/ilustraciones/leccion_13_ll/ll_llave.png",
      "silla":   "assets/ilustraciones/leccion_13_ll/ll_silla.png",
      "camello": "assets/ilustraciones/leccion_13_ll/ll_camello.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 14 — LA CH
  // ──────────────────────────────────────────────────────
  leccion_14_ch: {
    main:    "assets/ilustraciones/leccion_14_ch/ch_chino.png",
    coche:   "assets/ilustraciones/leccion_14_ch/ch_coche.png",
    chaleco: "assets/ilustraciones/leccion_14_ch/ch_chaleco.png",
    palabras: {
      "chino":   "assets/ilustraciones/leccion_14_ch/ch_chino.png",
      "coche":   "assets/ilustraciones/leccion_14_ch/ch_coche.png",
      "chaleco": "assets/ilustraciones/leccion_14_ch/ch_chaleco.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 15 — LA Ñ
  // ──────────────────────────────────────────────────────
  leccion_15_n: {
    main:   "assets/ilustraciones/leccion_15_n/n_muneca.png",
    coco:   "assets/ilustraciones/leccion_15_n/n_coco.png",
    pina:   "assets/ilustraciones/leccion_15_n/n_pina.png",
    palabras: {
      "muñeca": "assets/ilustraciones/leccion_15_n/n_muneca.png",
      "coco":   "assets/ilustraciones/leccion_15_n/n_coco.png",
      "piña":   "assets/ilustraciones/leccion_15_n/n_pina.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 16 — LA R suave
  // ──────────────────────────────────────────────────────
  leccion_16_r: {
    main:   "assets/ilustraciones/leccion_16_r/r_loro.png",
    pajaro: "assets/ilustraciones/leccion_16_r/r_pajaro.png",
    arana:  "assets/ilustraciones/leccion_16_r/r_arana.png",
    palabras: {
      "loro":  "assets/ilustraciones/leccion_16_r/r_loro.png",
      "araña": "assets/ilustraciones/leccion_16_r/r_arana.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 17 — LA RR
  // ──────────────────────────────────────────────────────
  leccion_17_rr: {
    main:    "assets/ilustraciones/leccion_17_rr/rr_burro.png",
    perro:   "assets/ilustraciones/leccion_17_rr/rr_perro.png",
    carreta: "assets/ilustraciones/leccion_17_rr/rr_carreta.png",
    palabras: {
      "burro":   "assets/ilustraciones/leccion_17_rr/rr_burro.png",
      "perro":   "assets/ilustraciones/leccion_17_rr/rr_perro.png",
      "carreta": "assets/ilustraciones/leccion_17_rr/rr_carreta.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 18 — R INICIAL
  // ──────────────────────────────────────────────────────
  leccion_18_R: {
    main:    "assets/ilustraciones/leccion_18_R/R_remolino.png",
    Rosa:    "assets/ilustraciones/leccion_18_R/R_Rosa.png",
    Ramona:  "assets/ilustraciones/leccion_18_R/R_Ramona.png",
    Renato:  "assets/ilustraciones/leccion_18_R/R_Renato.png",
    palabras: {
      "remolino": "assets/ilustraciones/leccion_18_R/R_remolino.png",
      "Rosa":     "assets/ilustraciones/leccion_18_R/R_Rosa.png",
      "Ramona":   "assets/ilustraciones/leccion_18_R/R_Ramona.png",
      "Renato":   "assets/ilustraciones/leccion_18_R/R_Renato.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 19 — LA Z
  // ──────────────────────────────────────────────────────
  leccion_19_z: {
    main:    "assets/ilustraciones/leccion_19_z/z_zorro.png",
    zapato:  "assets/ilustraciones/leccion_19_z/z_zapato.png",
    lechuza: "assets/ilustraciones/leccion_19_z/z_lechuza.png",
    buzo:    "assets/ilustraciones/leccion_19_z/z_buzo.png",
    palabras: {
      "zorro":   "assets/ilustraciones/leccion_19_z/z_zorro.png",
      "zapato":  "assets/ilustraciones/leccion_19_z/z_zapato.png",
      "lechuza": "assets/ilustraciones/leccion_19_z/z_lechuza.png",
      "buzo":    "assets/ilustraciones/leccion_19_z/z_buzo.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 20 — TERMINACIONES S / JAULA
  // ──────────────────────────────────────────────────────
  leccion_20_terminaciones: {
    main: "assets/ilustraciones/leccion_20_terminaciones/jaula_pajaros.png",
    descripcion: "Jaula con pájaros para contar (ejercicio de números)",
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 21 — TERMINACIONES L
  // ──────────────────────────────────────────────────────
  leccion_21_l_final: {
    main:    "assets/ilustraciones/leccion_21_l_final/sol_imagen.png",
    sal:     "assets/ilustraciones/leccion_21_l_final/sal_imagen.png",
    caracol: "assets/ilustraciones/leccion_21_l_final/caracol_imagen.png",
    palabras: {
      "sol":     "assets/ilustraciones/leccion_21_l_final/sol_imagen.png",
      "sal":     "assets/ilustraciones/leccion_21_l_final/sal_imagen.png",
      "caracol": "assets/ilustraciones/leccion_21_l_final/caracol_imagen.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 22 — GRUPOS -R
  // ──────────────────────────────────────────────────────
  leccion_22_r_ending: {
    main:   "assets/ilustraciones/leccion_22_r_ending/ardilla_imagen.png",
    arbol:  "assets/ilustraciones/leccion_22_r_ending/arbol_imagen.png",
    carta:  "assets/ilustraciones/leccion_22_r_ending/carta_imagen.png",
    palabras: {
      "ardilla": "assets/ilustraciones/leccion_22_r_ending/ardilla_imagen.png",
      "árbol":   "assets/ilustraciones/leccion_22_r_ending/arbol_imagen.png",
      "carta":   "assets/ilustraciones/leccion_22_r_ending/carta_imagen.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 23 — GRUPOS -N
  // ──────────────────────────────────────────────────────
  leccion_23_n_ending: {
    main:    "assets/ilustraciones/leccion_23_n_ending/pan_imagen.png",
    candado: "assets/ilustraciones/leccion_23_n_ending/candado_imagen.png",
    palabras: {
      "pan":     "assets/ilustraciones/leccion_23_n_ending/pan_imagen.png",
      "candado": "assets/ilustraciones/leccion_23_n_ending/candado_imagen.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 24 — GRUPOS -M
  // ──────────────────────────────────────────────────────
  leccion_24_m_ending: {
    main:     "assets/ilustraciones/leccion_24_m_ending/embudo_imagen.png",
    campana:  "assets/ilustraciones/leccion_24_m_ending/campana_imagen.png",
    palabras: {
      "embudo":  "assets/ilustraciones/leccion_24_m_ending/embudo_imagen.png",
      "campana": "assets/ilustraciones/leccion_24_m_ending/campana_imagen.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 25 — DIPTONGOS AU/AI/EI
  // ──────────────────────────────────────────────────────
  leccion_25_diptongos: {
    main:      "assets/ilustraciones/leccion_25_diptongos/auto_imagen.png",
    avion:     "assets/ilustraciones/leccion_25_diptongos/avion_imagen.png",
    guanaco:   "assets/ilustraciones/leccion_25_diptongos/guanaco_imagen.png",
    neumatico: "assets/ilustraciones/leccion_25_diptongos/neumatico.png",
    palabras: {
      "auto":      "assets/ilustraciones/leccion_25_diptongos/auto_imagen.png",
      "avión":     "assets/ilustraciones/leccion_25_diptongos/avion_imagen.png",
      "guanaco":   "assets/ilustraciones/leccion_25_diptongos/guanaco_imagen.png",
      "neumático": "assets/ilustraciones/leccion_25_diptongos/neumatico.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 26 — GRUPOS IA IE IO
  // ──────────────────────────────────────────────────────
  leccion_26_ia_ie_io: {
    main:    "assets/ilustraciones/leccion_26_ia_ie_io/piano_imagen.png",
    siete:   "assets/ilustraciones/leccion_26_ia_ie_io/siete_imagen.png",
    gaviota: "assets/ilustraciones/leccion_26_ia_ie_io/gaviota_imagen.png",
    palabras: {
      "piano":   "assets/ilustraciones/leccion_26_ia_ie_io/piano_imagen.png",
      "gaviota": "assets/ilustraciones/leccion_26_ia_ie_io/gaviota_imagen.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 27 — GRUPOS UE UA
  // ──────────────────────────────────────────────────────
  leccion_27_ue_ua: {
    main: "assets/ilustraciones/leccion_27_ue_ua/rueda_imagen.png",
    palabras: {
      "rueda": "assets/ilustraciones/leccion_27_ue_ua/rueda_imagen.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 28 — LA Y
  // ──────────────────────────────────────────────────────
  leccion_28_y: {
    main:     "assets/ilustraciones/leccion_28_y/y_payaso.png",
    yolanda:  "assets/ilustraciones/leccion_28_y/y_yolanda.png",
    palabras: {
      "payaso":  "assets/ilustraciones/leccion_28_y/y_payaso.png",
      "Yolanda": "assets/ilustraciones/leccion_28_y/y_yolanda.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 29 — CE CI
  // ──────────────────────────────────────────────────────
  leccion_29_ce_ci: {
    main: "assets/ilustraciones/leccion_29_ce_ci/ce_cebolla.png",
    palabras: {
      "cebolla": "assets/ilustraciones/leccion_29_ce_ci/ce_cebolla.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 30 — LA G
  // ──────────────────────────────────────────────────────
  leccion_30_g: {
    main:    "assets/ilustraciones/leccion_30_g/g_gato.png",
    gallo:   "assets/ilustraciones/leccion_30_g/g_gallo.png",
    gorila:  "assets/ilustraciones/leccion_30_g/g_gorila.png",
    guitarra:"assets/ilustraciones/leccion_30_g/gue_guitarra.png",
    aguila:  "assets/ilustraciones/leccion_30_g/gue_aguila.png",
    palabras: {
      "gato":     "assets/ilustraciones/leccion_30_g/g_gato.png",
      "gallo":    "assets/ilustraciones/leccion_30_g/g_gallo.png",
      "gorila":   "assets/ilustraciones/leccion_30_g/g_gorila.png",
      "guitarra": "assets/ilustraciones/leccion_30_g/gue_guitarra.png",
      "águila":   "assets/ilustraciones/leccion_30_g/gue_aguila.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 31 — ISLA / MAYÚSCULAS
  // ──────────────────────────────────────────────────────
  leccion_31_mayusc: {
    main: "assets/ilustraciones/leccion_31_mayusc/isla_imagen.png",
    palabras: {
      "isla": "assets/ilustraciones/leccion_31_mayusc/isla_imagen.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIÓN 32 — LA H
  // ──────────────────────────────────────────────────────
  leccion_32_h: {
    main:  "assets/ilustraciones/leccion_32_h/h_hoja.png",
    hacha: "assets/ilustraciones/leccion_32_h/h_hacha.png",
    huevo: "assets/ilustraciones/leccion_32_h/h_huevo.png",
    buho:  "assets/ilustraciones/leccion_32_h/h_buho.png",
    palabras: {
      "hoja":  "assets/ilustraciones/leccion_32_h/h_hoja.png",
      "hacha": "assets/ilustraciones/leccion_32_h/h_hacha.png",
      "huevo": "assets/ilustraciones/leccion_32_h/h_huevo.png",
      "búho":  "assets/ilustraciones/leccion_32_h/h_buho.png",
    },
  },

  // ──────────────────────────────────────────────────────
  // LECCIONES DE GRUPOS CONSONÁNTICOS (PL, BL, GL, FL, CL, PR, TR, BR, CR, DR, FR, GR)
  // ──────────────────────────────────────────────────────
  leccion_33_pl: {
    main:  "assets/ilustraciones/leccion_33_pl/pl_pluma.png",
    plato: "assets/ilustraciones/leccion_33_pl/pl_plato.png",
    palabras: { "pluma": "assets/ilustraciones/leccion_33_pl/pl_pluma.png", "plato": "assets/ilustraciones/leccion_33_pl/pl_plato.png" },
  },
  leccion_34_bl: {
    main:  "assets/ilustraciones/leccion_34_bl/bl_sable.png",
    blusa: "assets/ilustraciones/leccion_34_bl/bl_blusa.png",
    palabras: { "sable": "assets/ilustraciones/leccion_34_bl/bl_sable.png", "blusa": "assets/ilustraciones/leccion_34_bl/bl_blusa.png" },
  },
  leccion_35_gl: {
    main: "assets/ilustraciones/leccion_35_gl/gl_iglesia.png",
    palabras: { "iglesia": "assets/ilustraciones/leccion_35_gl/gl_iglesia.png" },
  },
  leccion_36_fl: {
    main:   "assets/ilustraciones/leccion_36_fl/fl_florero.png",
    flecha: "assets/ilustraciones/leccion_36_fl/fl_flecha.png",
    palabras: { "florero": "assets/ilustraciones/leccion_36_fl/fl_florero.png", "flecha": "assets/ilustraciones/leccion_36_fl/fl_flecha.png" },
  },
  leccion_37_cl: {
    main:      "assets/ilustraciones/leccion_37_cl/cl_ancla.png",
    corredor:  "assets/ilustraciones/leccion_37_cl/cl_corredor.png",
    palabras: { "ancla": "assets/ilustraciones/leccion_37_cl/cl_ancla.png" },
  },
  leccion_38_pr: {
    main: "assets/ilustraciones/leccion_38_pr/pr_preso.png",
    palabras: { "preso": "assets/ilustraciones/leccion_38_pr/pr_preso.png" },
  },
  leccion_39_tr: {
    main: "assets/ilustraciones/leccion_39_tr/tr_trigo.png",
    palabras: { "trigo": "assets/ilustraciones/leccion_39_tr/tr_trigo.png" },
  },
  leccion_40_br: {
    main: "assets/ilustraciones/leccion_40_br/br_cabra.png",
    palabras: { "cabra": "assets/ilustraciones/leccion_40_br/br_cabra.png" },
  },
  leccion_41_cr: {
    main: "assets/ilustraciones/leccion_41_cr/cr_cruz.png",
    palabras: { "cruz": "assets/ilustraciones/leccion_41_cr/cr_cruz.png" },
  },
  leccion_42_dr: {
    main: "assets/ilustraciones/leccion_42_dr/dr_golondrina.png",
    palabras: { "golondrina": "assets/ilustraciones/leccion_42_dr/dr_golondrina.png" },
  },
  leccion_43_fr: {
    main: "assets/ilustraciones/leccion_43_fr/fr_fruta.png",
    palabras: { "fruta": "assets/ilustraciones/leccion_43_fr/fr_fruta.png" },
  },
  leccion_44_gr: {
    main: "assets/ilustraciones/leccion_44_gr/gr_tigre.png",
    palabras: { "tigre": "assets/ilustraciones/leccion_44_gr/gr_tigre.png" },
  },
  leccion_45_k: {
    main: "assets/ilustraciones/leccion_45_k/k_kilo.png",
    palabras: { "kilo": "assets/ilustraciones/leccion_45_k/k_kilo.png" },
  },
  leccion_46_x: {
    // No hay imagen principal extraída para X, usar la página del examen
    main: null,
    palabras: {},
  },
  leccion_47_pinguino: {
    main: "assets/ilustraciones/leccion_47_pinguino/pinguino_imagen.png",
    palabras: { "pingüino": "assets/ilustraciones/leccion_47_pinguino/pinguino_imagen.png" },
  },
  leccion_47_gitanos: {
    main: "assets/ilustraciones/leccion_47_gitanos/gitanos_imagen.png",
    palabras: { "gitanos": "assets/ilustraciones/leccion_47_gitanos/gitanos_imagen.png" },
  },

  // ──────────────────────────────────────────────────────
  // CUENTOS Y LECTURAS
  // ──────────────────────────────────────────────────────
  cuentos: {
    el_pan:           "assets/ilustraciones/cuentos/cuento_elpan.png",
    la_codicia:       "assets/ilustraciones/cuentos/cuento_codicia.png",
    el_lobo:          "assets/ilustraciones/cuentos/cuento_lobo.png",
    el_lobo2:         "assets/ilustraciones/cuentos/cuento_lobo2.png",
    el_tren:          "assets/ilustraciones/cuentos/cuento_tren.png",
    la_desobediencia: "assets/ilustraciones/cuentos/cuento_desobediencia.png",
    perro_negro:      "assets/ilustraciones/cuentos/cuento_perro.png",
    carta_nina:       "assets/ilustraciones/cuentos/carta_nina.png",
    carta_nina2:      "assets/ilustraciones/cuentos/carta_nina2.png",
    tintero_pluma:    "assets/ilustraciones/cuentos/cartas_tintero.png",
  },

};

// Helper: get image for a word in a lesson
function getImageForWord(lessonKey, word) {
  const lesson = ILLUSTRATIONS[lessonKey];
  if (!lesson || !lesson.palabras) return null;
  return lesson.palabras[word] || null;
}

// Helper: get all images for a lesson as array
function getLessonImages(lessonKey) {
  const lesson = ILLUSTRATIONS[lessonKey];
  if (!lesson) return [];
  return Object.entries(lesson)
    .filter(([k, v]) => k !== 'palabras' && k !== 'descripcion' && k !== 'uso' && typeof v === 'string')
    .map(([k, v]) => ({ name: k, path: v }));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ILLUSTRATIONS, getImageForWord, getLessonImages };
}
