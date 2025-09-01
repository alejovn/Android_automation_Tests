# [AndroidTest] 📱

Este es un proyecto de automatización de pruebas para una aplicación móvil de Android, utilizando **WebdriverIO** y **Appium**. El objetivo es garantizar la calidad y el correcto funcionamiento de las funcionalidades principales de la aplicación.

## Características

- ✅ Pruebas de inicio de sesión (`login.page.ts`).
- ✅ Pruebas de registro (`secure.page.ts`).
- 🛠️ Utiliza el patrón de diseño **Page Object Model** para mantener el código organizado y reutilizable.

## Pre-requisitos

Asegúrate de tener instalado lo siguiente antes de empezar:

* **Node.js**: [Link a la página de Node.js]
* **Appium**: Puedes instalarlo globalmente con:
    ```bash
    npm install -g appium
    ```
* **Android Studio**: Para el SDK de Android y la configuración de un emulador o un dispositivo físico.

## Instalación

1.  Clona este repositorio:
    ```bash
    git clone [https://github.com/](https://github.com/)[alejovn]/[Android_automation_Tests].git
    ```

2.  Navega al directorio del proyecto e instala las dependencias:
    ```bash
    cd [AndroidTest]
    npm install
    ```

## Uso

Para ejecutar todas las pruebas, utiliza el siguiente comando:

```bash
npm run wdio
