# Personal Trainer Website - Replit Project

## Overview
Website para personal trainer com seção de vídeos do Instagram que apresenta problemas de carregamento no mobile.

## User Preferences
- Usuário fala português brasileiro
- Prioriza funcionamento perfeito no mobile
- Quer vídeos que carreguem rapidamente sem travamentos

## Recent Changes
- 2024-12-24: Corrigido problemas de vídeos no mobile
- Implementado lazy loading com Intersection Observer
- Melhorado controle de touch para mobile
- Adicionado tratamento de erro robusto
- Otimizado preload apenas para vídeos ativos
- Corrigido atributos inválidos do HTML5 video

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