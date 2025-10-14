# ResiSphere - Developer Quick Reference

## 🎯 What We Built

A **full-stack disaster management training monitoring system** with:
- ✅ Landing page with NDMA branding
- ✅ User authentication (login/register)
- ✅ Dashboard with sidebar navigation
- ✅ Analytics dashboard with charts
- ✅ MongoDB models (User, Training, Feedback)
- ✅ JWT-based auth system

## 🌐 Live URLs

- **Landing:** http://localhost:3000
- **Login:** http://localhost:3000/login
- **Register:** http://localhost:3000/register
- **Dashboard:** http://localhost:3000/dashboard

## 🔑 Test the Application

### 1. Start the Server (if not running)
```bash
cd /workspaces/RealTIme-DM-TrakSetu/web
npm run dev
```

### 2. Access the Landing Page
- Open: http://localhost:3000
- View features, stats, and navigation

### 3. Register a New User
- Click "Get Started" or "Register"
- Fill in the form
- Select a role (Admin, SDMA, ATI, NGO, Trainer, Volunteer)
- Submit

### 4. View Dashboard
- After registration, you'll be redirected to `/dashboard`
- See live metrics, charts, and recent trainings
- Navigate using the sidebar

## 📊 Current Features

### Landing Page
- Hero section with branding
- Stats cards (users, trainings, states, satisfaction)
- Features showcase (6 modules)
- Call-to-action sections
- Footer with contact info

### Authentication
- **Login:** Email + password
- **Register:** Full profile with role selection
- **Logout:** Clear session
- **Protected Routes:** Dashboard requires auth

### Dashboard
- **Sidebar Navigation:** 
  - Dashboard (overview)
  - Trainings (coming next)
  - GIS Map (coming next)
  - Analytics
  - Feedback
  - Users
  
- **Overview Page:**
  - 4 metric cards
  - Line chart (training trends)
  - Pie chart (regional distribution)
  - Bar chart (theme distribution)
  - Recent trainings list

## 🔨 Next Development Tasks

### Immediate (Priority 1)
1. **Training Management**
   - List all trainings
   - Add new training form
   - Edit existing training
   - Delete training
   - API: GET, POST, PUT, DELETE /api/trainings

2. **GIS Map Component**
   - Install and configure Leaflet
   - Display map on /dashboard/map
   - Show training locations as markers
   - Cluster markers by region
   - Add filters (date, theme, organization)

### Soon (Priority 2)
3. **User Management (Admin)**
   - List all users
   - Edit user roles
   - Activate/deactivate users
   - View user details

4. **Feedback Module**
   - Submit feedback form
   - View feedback list
   - Generate reports
   - Rate trainers

## 📁 Key Files to Know

### Models
- `src/models/User.ts` - User schema
- `src/models/Training.ts` - Training schema
- `src/models/Feedback.ts` - Feedback schema

### Auth
- `src/lib/auth.ts` - JWT utilities
- `src/lib/db.ts` - MongoDB connection
- `src/app/api/auth/` - Auth API routes

### Pages
- `src/app/page.tsx` - Landing page
- `src/app/(auth)/login/page.tsx` - Login
- `src/app/(auth)/register/page.tsx` - Register
- `src/app/(dashboard)/dashboard/page.tsx` - Main dashboard

### Layout
- `src/app/(dashboard)/layout.tsx` - Dashboard layout with sidebar

## 🎨 Design System

### Colors (NDMA Theme)
```css
Primary: #003366 (NDMA Blue)
Secondary: #0066CC
Light: #3399FF
Accent: #66B2FF
Background: white, gray-50
Text: gray-900, gray-600
```

### Typography
- Headings: Bold, large
- Body: Regular
- Use system fonts

### Components
All shadcn/ui components available in `src/components/ui/`

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Production build

# Database
# Update MongoDB URI in .env.local

# Add new shadcn component
npx shadcn@latest add [component-name]

# Install new package
npm install [package-name]
```

## 🚀 How to Continue Building

### Option 1: Training Management Module
```bash
# Create training list page
touch src/app/(dashboard)/trainings/page.tsx

# Create add training page
touch src/app/(dashboard)/trainings/new/page.tsx

# Create training API
mkdir -p src/app/api/trainings
touch src/app/api/trainings/route.ts
```

### Option 2: GIS Map Module
```bash
# Create map page
touch src/app/(dashboard)/map/page.tsx

# Create map component
mkdir -p src/components/maps
touch src/components/maps/TrainingMap.tsx
```

### Option 3: User Management
```bash
# Create users page
touch src/app/(dashboard)/users/page.tsx

# Create user API
mkdir -p src/app/api/users
touch src/app/api/users/route.ts
```

## 📝 Code Patterns

### Creating a New Page
```typescript
'use client';

import { Card } from '@/components/ui/card';

export default function MyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Page Title</h1>
      {/* Your content */}
    </div>
  );
}
```

### Creating an API Route
```typescript
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { getCurrentUserFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    // Your logic here
    
    return NextResponse.json({ data: 'success' });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
1. Check `.env.local` has correct MONGODB_URI
2. Ensure MongoDB is running
3. Check network connectivity

### Authentication Not Working
1. Clear browser cookies
2. Check JWT_SECRET in `.env.local`
3. Verify API routes are running

### Charts Not Rendering
1. Ensure recharts is installed
2. Check browser console for errors
3. Verify data format matches chart requirements

## 📞 Need Help?

1. Check `PROJECT_STATUS.md` for detailed status
2. Review `README.md` for overview
3. Examine existing code for patterns
4. Check Next.js docs for framework questions

---

**Happy Coding! 🚀**

Build something amazing for disaster preparedness! 💪
