
# Website Updates Plan

## Changes Overview

### 1. Contact Section - Update Email & Remove Phone/Location
- Change email to `aryankumatgupta2009@mail.com`
- Remove Phone and Location from contact info, keep only Email
- Remove MapPin and Phone imports

### 2. Remove "DesignStudio" Branding from Footer
- Change footer logo from "D" / "DesignStudio" to "A" / "Aryan Gupta"
- Update copyright text to use "Aryan Gupta" instead of "DesignStudio"

### 3. Testimonials - Use Indian Clients
Replace the 3 existing testimonials with Indian client names and context:
- **Rajesh Sharma** - Founder, TechVista Solutions - praising web development work
- **Priya Patel** - CEO, EduSmart India - praising AI automation
- **Amit Verma** - Director, GrowthBox Digital - praising business solutions

### 4. Projects Section - Show Image Field Properly
- Ensure the project card image area works well in both light and dark mode
- Add proper contrast backgrounds so images look good in both themes
- Add a subtle overlay/border on the image container for better visibility

### 5. Light/Dark Mode Polish
- Ensure all sections have proper contrast in both themes
- Fix any elements that look washed out in light mode or too dark in dark mode

## Technical Details

**Files to modify:**
- `src/components/Contact.tsx` - Remove phone/location, update email
- `src/components/Footer.tsx` - Replace DesignStudio with Aryan Gupta
- `src/components/Testimonials.tsx` - Replace with Indian client testimonials
- `src/components/Projects.tsx` - Polish image display for both themes
