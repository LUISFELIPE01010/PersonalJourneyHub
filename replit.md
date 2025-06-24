# Personal Trainer Website - Replit Project

## Overview
Website para personal trainer com seção de vídeos do Instagram que apresenta problemas de carregamento no mobile.

## User Preferences
- Usuário fala português brasileiro
- Prioriza funcionamento perfeito no mobile
- Quer vídeos que carreguem rapidamente sem travamentos
- Prefere botões com opacidade baixa/transparentes
- Quer thumbnails reais dos vídeos, não tela cinza
- Quer carousel horizontal com swipe fluido entre vídeos

## Recent Changes
- 2024-12-24: Implementado carousel horizontal com swipe fluido
- Vídeos agora mostram thumbnails reais do primeiro frame
- Sistema de touch simplificado que não interfere com scroll da página
- Carousel responsivo funciona em todos os dispositivos
- Preload metadata para gerar thumbnails automaticamente
- Navegação por swipe suave no mobile
- 2025-01-24: Otimizada imagem do Hero para carregamento rápido no mobile
- Botão "Começar Agora" do quiz agora leva direto ao WhatsApp com cor vermelha
- Implementado SEO completo: meta tags, schema markup, sitemap, robots.txt
- Adicionadas otimizações de performance e segurança
- Corrigidos bugs de interação nos vídeos no mobile (botões maiores, delays, touch optimization)
- 2025-01-24: Otimizada imagem do Hero para carregamento rápido no mobile
- Botão "Começar Agora" do quiz agora leva direto ao WhatsApp
- Adicionadas otimizações CSS para GPU acceleration e rendering

## Project Architecture  
- Frontend: React/TypeScript com Vite
- Backend: Express.js
- Componente InstagramVideos.tsx otimizado para mobile
- Vídeos locais em /public (video1.mp4 - video4.mp4)
- Sistema de carregamento inteligente baseado em visibilidade

## Mobile Optimizations
- Preload apenas para vídeos visíveis
- Controles touch otimizados (botões maiores)
- Tratamento especial para dispositivos móveis
- Poster placeholder para melhor UX
- Timeout de 5s para evitar travamentos