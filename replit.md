# Personal Trainer Website - Replit Project

## Overview
Website para personal trainer com seção de vídeos do Instagram que apresenta problemas de carregamento no mobile.

## User Preferences
- Usuário fala português brasileiro
- Prioriza funcionamento perfeito no mobile
- Quer vídeos que carreguem rapidamente sem travamentos
- Prefere botões com opacidade baixa/transparentes
- Quer thumbnails reais dos vídeos, não tela cinza

## Recent Changes
- 2024-12-24: Corrigido problemas de vídeos no mobile
- Implementado lazy loading inteligente
- Melhorado controle de touch para mobile
- Adicionado tratamento de erro robusto com retry
- Otimizado preload apenas para vídeos ativos
- Design visual aprimorado com gradientes e sombras
- Botões com cores atrativas (vermelho para play/pause)
- Indicadores visuais melhorados (HD, duração, ativo)

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