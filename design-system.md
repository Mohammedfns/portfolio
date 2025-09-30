# Design System - Portfolio

## Palette de couleurs

### Couleurs principales
- **Fond principal** : `#121212` (Noir profond)
- **Fond secondaire** : `#1e1e1e` (Noir gris foncé)
- **Fond tertiaire** : `#2d2d2d` (Gris très foncé)

### Couleurs de texte
- **Texte principal** : `#f5f5f5` (Blanc cassé)
- **Texte secondaire** : `#a0a0a0` (Gris clair)
- **Texte tertiaire** : `#6c6c6c` (Gris moyen)

### Couleurs d'accent
- **Accent primaire** : `#6366f1` (Indigo)
- **Accent secondaire** : `#8b5cf6` (Violet)
- **Accent tertiaire** : `#3b82f6` (Bleu)

### Couleurs de statut
- **Succès** : `#10b981` (Vert émeraude)
- **Avertissement** : `#f59e0b` (Ambre)
- **Erreur** : `#ef4444` (Rouge)
- **Info** : `#3b82f6` (Bleu)

### Gradients
- **Gradient principal** : `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`
- **Gradient secondaire** : `linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)`

## Typographie

### Familles de polices
- **Police principale** : Geist Sans (déjà configurée dans Next.js)
- **Police secondaire** : Geist Mono (déjà configurée dans Next.js)

### Tailles de police
- **Texte très petit** : `0.75rem` (12px)
- **Texte petit** : `0.875rem` (14px)
- **Texte normal** : `1rem` (16px)
- **Texte moyen** : `1.125rem` (18px)
- **Texte grand** : `1.25rem` (20px)
- **Texte très grand** : `1.5rem` (24px)
- **Titre petit** : `1.875rem` (30px)
- **Titre moyen** : `2.25rem` (36px)
- **Titre grand** : `3rem` (48px)
- **Titre très grand** : `3.75rem` (60px)
- **Titre énorme** : `4.5rem` (72px)

### Poids de police
- **Regular** : `400`
- **Medium** : `500`
- **Semibold** : `600`
- **Bold** : `700`

### Hauteurs de ligne
- **Serrée** : `1.25`
- **Normal** : `1.5`
- **Relâchée** : `1.75`

## Espacement

### Échelle d'espacement
- **4xs** : `0.125rem` (2px)
- **3xs** : `0.25rem` (4px)
- **2xs** : `0.5rem` (8px)
- **xs** : `0.75rem` (12px)
- **sm** : `1rem` (16px)
- **md** : `1.5rem` (24px)
- **lg** : `2rem` (32px)
- **xl** : `2.5rem` (40px)
- **2xl** : `3rem` (48px)
- **3xl** : `4rem` (64px)
- **4xl** : `6rem` (96px)
- **5xl** : `8rem` (128px)

## Bordures et arrondis

### Rayons de bordure
- **Aucun** : `0`
- **Petit** : `0.25rem` (4px)
- **Moyen** : `0.5rem` (8px)
- **Grand** : `1rem` (16px)
- **Très grand** : `1.5rem` (24px)
- **Complet** : `9999px`

### Épaisseurs de bordure
- **Fine** : `1px`
- **Moyenne** : `2px`
- **Épaisse** : `4px`

## Ombres

### Ombres de boîte
- **Subtile** : `0 1px 2px rgba(0, 0, 0, 0.1)`
- **Légère** : `0 2px 4px rgba(0, 0, 0, 0.1)`
- **Moyenne** : `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Prononcée** : `0 10px 15px rgba(0, 0, 0, 0.1)`
- **Forte** : `0 20px 25px rgba(0, 0, 0, 0.1)`

## Animations et transitions

### Durées
- **Très rapide** : `100ms`
- **Rapide** : `200ms`
- **Normale** : `300ms`
- **Lente** : `500ms`
- **Très lente** : `1000ms`

### Courbes de temporisation
- **Linéaire** : `linear`
- **Ease** : `ease`
- **Ease-in** : `ease-in`
- **Ease-out** : `ease-out`
- **Ease-in-out** : `ease-in-out`

## Composants UI

### Boutons
- **Primaire** : Fond avec gradient principal, texte blanc, arrondi moyen
- **Secondaire** : Bordure avec couleur d'accent, fond transparent, texte d'accent
- **Tertiaire** : Pas de bordure, pas de fond, texte d'accent
- **Fantôme** : Fond transparent qui devient semi-opaque au survol

### Cartes
- Fond secondaire
- Arrondi moyen à grand
- Ombre légère
- Padding moyen
- Transition douce au survol (légère élévation)

### Champs de formulaire
- Fond tertiaire
- Bordure fine ou pas de bordure
- Arrondi moyen
- Focus avec bordure ou glow d'accent

### Navigation
- Indicateur subtil pour l'élément actif
- Transitions douces pour les interactions
- Espacement cohérent entre les éléments

## Principes de design

1. **Contraste élevé** : Assurer une bonne lisibilité avec un contraste suffisant entre le texte et le fond
2. **Espace négatif** : Utiliser généreusement l'espace blanc pour créer une mise en page aérée et élégante
3. **Hiérarchie visuelle** : Guider l'attention de l'utilisateur avec une hiérarchie claire des éléments
4. **Cohérence** : Maintenir une cohérence dans l'utilisation des couleurs, typographie et composants
5. **Micro-interactions** : Ajouter des retours visuels subtils pour améliorer l'expérience utilisateur
6. **Accessibilité** : S'assurer que le design reste accessible malgré le mode sombre

