# Project Overview
YeahScene AI's landing page should be a **visually stunning**, **animated**, and **modern** website that highlights the agency’s automation services. Initially, it will showcase a **single product**, but the design should support **future add-ons**.  

The website will feature:
- **An animated hero section** introducing the agency.
- **A product showcase section** for the main AI product.
- **A contact page** for users to submit inquiries.
- **An about section** displaying the agency's details and experience.
- **A scalable design** to accommodate future products.

### Tech Stack:
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Libraries** (Choose the best fit or mix them):
  - **shadcn-ui**, **daisy-ui**, or **chakra-ui** for UI components.
  - **framer-motion** for animations.
- **Icons**:
  - **lucide-react** or **react-icons**.

---

## Core Functionalities

### 1. Animated Hero Section
- **Description**: A visually engaging animated hero section with dynamic text effects and a smooth page-load animation.
- **Features**:
  - **Framer Motion animations**:
    - Fade-in for the header and subtext.
    - Staggered text reveal effect.
    - Background animations (e.g., gradient shifts or particle effects).
  - **Dynamic tagline text effect** (e.g., typing animation or smooth transitions).
- **UI Components**:
  - **Heading**: "YeahScene AI - Automation Redefined".
  - **Subheading**: A description of the agency’s focus.
  - **Call-to-Action Button**: "Explore Our Solutions".
- **Integration**:
  - Use **Framer Motion** for animations.
  - Implement **lucide-react** or **react-icons** for icons.

---

### 2. Product Showcase (Expandable for Future Products)
- **Description**: A section that highlights the agency’s AI product with a **modern card-style** layout.
- **Features**:
  - **Animated product card** (hover effects, smooth transitions).
  - **Expandable structure** to support future products.
  - **Carousel or grid display** for product information.
  - **CTA Button**: "Learn More".
- **UI Components**:
  - **Product Image**.
  - **Title & Short Description**.
  - **Key Features List**.
  - **Learn More Button**.
- **Integration**:
  - Use **shadcn-ui**, **chakra-ui**, or **daisy-ui** for cards & layout.
  - Implement **Framer Motion** for hover and scroll animations.

---

### 3. Contact Page (Form Submission)
- **Description**: A contact page where users can submit inquiries.
- **Form Fields**:
  - **Name** (text input).
  - **Mobile Number** (number input).
  - **Email** (email input).
  - **Company Name** (text input).
  - **Budget** (dropdown or text input).
  - **Requirements** (textarea input).
- **Features**:
  - **Form validation** (ensure required fields are filled).
  - **Smooth form animations** (fade-in fields, button hover effects).
  - **Backend API integration** to send inquiries (Next.js API routes).
- **Integration**:
  - Use **shadcn-ui**, **chakra-ui**, or **daisy-ui** for form design.
  - Use **lucide-react** or **react-icons** for input icons.
  - Implement **Framer Motion** for smooth animations.

---

### 4. About Section (Work Experience & Details)
- **Description**: A dedicated section to showcase details about YeahScene AI.
- **Features**:
  - **Animated introduction text**.
  - **Timeline or card-based layout** for work experience.
  - **Modular structure** to easily add new achievements.
- **UI Components**:
  - **Profile Image / Agency Logo**.
  - **Short Bio**.
  - **Experience Timeline** (styled cards or timeline UI).
  - **Contact Info / Social Links**.
- **Integration**:
  - Use **shadcn-ui**, **chakra-ui**, or **daisy-ui** for UI elements.
  - Implement **Framer Motion** for fade-in and scroll animations.

---

## Docs
### 1. Next.js
- **Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Purpose**: Server-side rendering, API routes, and page navigation.

### 2. Tailwind CSS
- **Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Purpose**: Utility-first styling.

### 3. Framer Motion
- **Documentation**: [https://www.framer.com/motion/](https://www.framer.com/motion/)
- **Purpose**: Animations for UI elements.

### 4. shadcn-ui / daisy-ui / chakra-ui
- **Documentation**:
  - **shadcn-ui**: [https://ui.shadcn.com/](https://ui.shadcn.com/)
  - **daisy-ui**: [https://daisyui.com/](https://daisyui.com/)
  - **chakra-ui**: [https://chakra-ui.com/docs](https://chakra-ui.com/docs)
- **Purpose**: Prebuilt UI components.

### 5. lucide-react / react-icons
- **Documentation**:
  - **lucide-react**: [https://lucide.dev/docs/react](https://lucide.dev/docs/react)
  - **react-icons**: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)
- **Purpose**: Icons for UI elements.

---

## Important Implementation Notes
- Ensure **all animations are smooth** and **enhance user experience** without affecting performance.
- The **design should be mobile-responsive** with fluid layouts.
- **Future products should be easy to add** with minimal code changes.
- Use **Next.js API routes** for handling form submissions securely.
- Use **lazy loading** for images and animations to improve performance.

---
