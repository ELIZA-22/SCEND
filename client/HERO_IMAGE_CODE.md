# Hero Section Background Image - Implementation Code

## 📋 Prerequisites
1. Download a professional image of Black security/bodyguard personnel
2. Save it as: `client/public/images/hero-bodyguard.jpg`
3. Recommended specs: 1920x1080px or larger, JPG format

## 🎨 Implementation (Choose One Approach)

---

## Option 1: CSS Background with Overlay (Recommended)

### Why: Best for full-screen backgrounds with overlay effects

```tsx
{/* Hero Section */}
<section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 min-h-[600px] flex items-center">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
    style={{ backgroundImage: "url('/images/hero-bodyguard.jpg')" }}
  />
  
  {/* Dark Overlay for Text Readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />
  
  {/* Content (now with z-index to appear above background) */}
  <div className="container mx-auto px-4 relative z-10">
    {/* ... rest of your hero content ... */}
  </div>
</section>
```

**Pros:**
- Simple implementation
- Easy to control opacity
- Good performance
- Works perfectly with gradients

---

## Option 2: Next.js Image Component with Overlay

### Why: Better performance, automatic optimization

```tsx
import Image from 'next/image';

{/* Hero Section */}
<section className="relative text-white py-20 min-h-[600px] flex items-center overflow-hidden">
  {/* Background Image with Next.js Image */}
  <Image
    src="/images/hero-bodyguard.jpg"
    alt="Professional security personnel"
    fill
    priority
    className="object-cover opacity-30"
    quality={85}
  />
  
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />
  
  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    {/* ... rest of your hero content ... */}
  </div>
</section>
```

**Pros:**
- Automatic image optimization
- Lazy loading support
- Better for SEO
- Responsive images

---

## Option 3: Side-by-Side (Image + Text)

### Why: Alternative layout with image on one side

```tsx
<section className="bg-slate-900 text-white py-20">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Verified Protection.</span><br />
          <span className="text-primary-400">Discreetly Delivered.</span>
        </h1>
        {/* ... rest of content ... */}
      </div>
      
      {/* Image Side */}
      <div className="relative h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/images/hero-bodyguard.jpg"
          alt="Professional security team"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 Recommended: Full Implementation (Option 1)

Here's the complete hero section code with background image:

```tsx
{/* Hero Section with Background Image */}
<section className="relative text-white py-20 md:py-32 min-h-[700px] flex items-center">
  {/* Background Image Layer */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/images/hero-bodyguard.jpg')",
      backgroundPosition: 'center 30%' // Adjust focus area
    }}
  />
  
  {/* Gradient Overlay - Controls image darkness */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/80" />
  
  {/* Optional: Additional Bottom Gradient for Smooth Transition */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
  
  {/* Content - Must have relative z-10 to appear above backgrounds */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
        <span className="text-white">Verified Protection.</span><br />
        <span className="text-primary-400">Discreetly Delivered.</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-100 mb-8 drop-shadow-md">
        Nigeria&apos;s first technology-enabled platform for professional executive protection. 
        Trusted by CEOs, corporations, and high-profile individuals.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link 
          href="/request"
          className="px-8 py-4 bg-primary-500 text-white text-lg rounded-lg hover:bg-primary-600 transition inline-flex items-center justify-center font-semibold shadow-lg hover:shadow-xl"
        >
          <Shield className="mr-2 h-5 w-5" />
          Request Security Now
        </Link>
        <Link 
          href="/professionals"
          className="px-8 py-4 border-2 border-white bg-white/10 backdrop-blur-sm text-white text-lg rounded-lg hover:bg-white hover:text-slate-900 transition inline-flex items-center justify-center font-semibold"
        >
          Join as Professional
        </Link>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-100 drop-shadow-md">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-primary-400" />
          Licensed & Verified
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-primary-400" />
          Available 24/7
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-primary-400" />
          Nigeria-Wide Coverage
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 Customization Options

### Adjust Image Opacity
```tsx
// Less visible (more focus on text)
<div className="... opacity-20" />

// More visible (image shows through more)
<div className="... opacity-40" />
```

### Adjust Overlay Darkness
```tsx
// Lighter overlay (image more visible)
<div className="... from-slate-900/70 via-slate-900/50 to-slate-900/60" />

// Darker overlay (text more readable)
<div className="... from-slate-900/95 via-slate-900/90 to-slate-900/95" />
```

### Adjust Background Position
```tsx
style={{ 
  backgroundImage: "url('/images/hero-bodyguard.jpg')",
  backgroundPosition: 'center top' // Focus on top of image
}}

// Or
backgroundPosition: 'center center' // Focus on center
backgroundPosition: 'right center'  // Focus on right side
```

---

## 📱 Mobile Optimization

The code above is already mobile-responsive, but you can add specific mobile adjustments:

```tsx
<section className="relative text-white py-12 md:py-32 min-h-[600px] md:min-h-[700px] flex items-center">
  <div 
    className="absolute inset-0 bg-cover bg-center md:bg-top bg-no-repeat"
    style={{ backgroundImage: "url('/images/hero-bodyguard.jpg')" }}
  />
  {/* Different overlay opacity for mobile */}
  <div className="absolute inset-0 bg-slate-900/90 md:bg-gradient-to-r md:from-slate-900/95 md:via-slate-900/85 md:to-slate-900/80" />
  {/* ... rest */}
</section>
```

---

## 🚀 Quick Start Steps

1. **Download image** from Pexels/Unsplash
2. **Save as**: `client/public/images/hero-bodyguard.jpg`
3. **Copy the "Option 1" code** above
4. **Replace** your current hero section in `app/page.tsx`
5. **Refresh** browser to see changes
6. **Adjust** opacity/overlay as needed

---

## 🎯 Expected Result

- ✅ Professional security personnel in background
- ✅ Text remains fully readable
- ✅ CTAs pop with good contrast
- ✅ Mobile responsive
- ✅ Professional, trustworthy appearance
- ✅ Similar to invulnerablesecurity.com reference

---

## 🐛 Troubleshooting

**Image not showing?**
- Check file path: must be `public/images/hero-bodyguard.jpg`
- Check file name matches exactly (case-sensitive)
- Hard refresh browser: `Ctrl + Shift + R`

**Image too dark/light?**
- Adjust the `opacity-30` value (20-50 range)
- Adjust overlay gradient opacity (70-95 range)

**Text not readable?**
- Increase overlay darkness: `/90` → `/95`
- Add `drop-shadow-lg` to text elements
- Use white text instead of slate colors

**Performance issues?**
- Compress image (use TinyPNG.com)
- Convert to WebP format
- Use Next.js Image component (Option 2)
