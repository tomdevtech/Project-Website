# Project Website - Tom DevTech 🚀✨

This project is a personal portfolio website hosted on GitHub Pages under the domain [https://tom-devtech.com/](https://tom-devtech.com/). It showcases various programming projects, demonstrating skills in React, TailwindCSS, TypeScript, and Vite.

## 🌟 Features
- 📱 Fully responsive layout built with TailwindCSS.
- ⚛️ React-based single-page application (SPA) utilizing React Router.
- 📦 Deployed via GitHub Pages using Vite.
- 🌐 Custom domain integrated using Namecheap.

## 🚀 Technologies Used
- **React** (with React Router for navigation) ⚛️
- **TailwindCSS** (for styling) 🎨
- **Vite** (for development and building) ⚡
- **GitHub Pages** (for hosting) 🌍
- **Namecheap** (for custom domain management) 🔑

## 📂 Folder Structure 📁
```
projectwebsite/
├── public/
│   ├── index.html
│   ├── CNAME   # Contains 'tom-devtech.com'
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── components/
├── package.json
├── tailwind.config.cjs
├── vite.config.js
├── README.md
```

## 🌐 Deployment Guide 🌟

### 🚀 Deploying to GitHub Pages
1. 🌟 **Create a GitHub repository** for your project.
2. 🔼 **Push your React app to the repository.**
3. In your `vite.config.js`, add the following configuration:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust if your repository is a subdirectory
});
```
4. 📂 Add a `CNAME` file to the `public` directory with the following content:
```
tom-devtech.com
```
5. In your `package.json`, update your `scripts` to include:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```
6. ⚙️ Build and deploy your project:
```bash
npm run build
npm run deploy
```
7. 🔼 Push your changes to GitHub.
8. ✅ Enable **GitHub Pages** under `Settings > Pages` in your repository.

### 🌐 Setting Up a Custom Domain with Namecheap 🌍
1. 🔑 Log into your [Namecheap account](https://www.namecheap.com/).
2. 📋 Navigate to **Domain List** and click **Manage** next to your domain.
3. 🔧 Go to the **Advanced DNS** tab.
4. Add the following DNS records:
   - **CNAME Record:**
     - Host: `www`
     - Value: `<your-username>.github.io`
     - TTL: Automatic
   - **A Record:**
     - Host: `@`
     - Value: `185.199.108.153` (and other IPs if needed)
     - TTL: Automatic
5. 💾 Save changes.
6. 🔗 Go to your repository’s `Settings > Pages` and set the **Custom domain** to `yourdomain.com`.

## 📚 References 📖
- [📓 Namecheap Documentation](https://www.namecheap.com/support/)
- [📓 GitHub Pages Documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
- [📓 Vite Documentation](https://vitejs.dev/guide/)
- [📓 TailwindCSS Documentation](https://tailwindcss.com/docs/installation)

## 📜 License 🔏
This project is licensed under the MIT License.

---

🎉 **Enjoy building and deploying your own website!** ✨🚀🎨