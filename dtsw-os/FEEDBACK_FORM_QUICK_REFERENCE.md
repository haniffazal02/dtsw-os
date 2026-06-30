# FeedbackForm Component - Quick Reference

## 📍 Component Location
```
components/FeedbackForm.tsx (434 lines)
```

## 🚀 Quick Start

### Import
```tsx
import { FeedbackForm, type FeedbackData } from '@/components';
```

### Basic Usage
```tsx
<FeedbackForm 
  onSubmit={async (data) => {
    await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }}
  onClose={() => navigate('/dashboard')}
/>
```

---

## 📦 API Reference

### Props
```typescript
interface FeedbackFormProps {
  onSubmit?: (data: FeedbackData) => Promise<void> | void;
  onClose?: () => void;
  className?: string;
}
```

### Data Structure
```typescript
interface FeedbackData {
  title: string;              // 5-100 characters
  description: string;        // 10-2000 characters
  rating: number;             // 1-5
  category: FeedbackCategory; // 'Suggestion' | 'Bug' | 'Feature Request' | 'Other'
  email?: string;             // Optional email
}
```

### Types Exported
```typescript
export type FeedbackCategory = 'Suggestion' | 'Bug' | 'Feature Request' | 'Other';
export type FormState = 'idle' | 'loading' | 'success' | 'error';
export interface FeedbackFormProps { ... }
export interface FeedbackData { ... }
```

---

## ✅ Features

| Feature | Details |
|---------|---------|
| **Text Input** | Title with 5-100 char validation + counter |
| **Textarea** | Description with 10-2000 char validation + counter |
| **Star Rating** | Interactive 1-5 star selector with animations |
| **Category** | Dropdown: Suggestion, Bug, Feature Request, Other |
| **Email** | Optional field with format validation |
| **Validation** | Client-side with field-level errors |
| **Animations** | Framer Motion staggered + interactive effects |
| **States** | idle, loading, success, error with proper feedback |
| **Responsive** | Mobile-first design, full-width layout |
| **Accessibility** | Labels, focus states, keyboard navigation |

---

## 🎨 Styling

### Colors
- **Primary**: `brand-primary` (#FF9500)
- **Success**: Emerald-50 bg, emerald-700 text
- **Error**: Red-50 bg, red-700 text
- **Borders**: `border-border-primary` (light gray)

### Classes Available
- Override with `className` prop
- Container: `cn('w-full', className)`

### Responsive Breakpoints
- Mobile-first approach
- All Tailwind responsive utilities available
- Adapts to any screen size

---

## 🔄 State Flow

```
idle → (user fills form) → idle/error (validation)
         ↓ (valid)
       loading → success → (2s) → idle + onClose
         ↓ (error)
       error → (3s auto-dismiss) → idle
```

---

## 📝 Validation Rules

| Field | Rules |
|-------|-------|
| **Title** | Required • 5-100 chars • Trimmed |
| **Description** | Required • 10-2000 chars • Trimmed |
| **Email** | Optional • Format: `x@x.x` |
| **Category** | Auto-selected (default: Suggestion) |
| **Rating** | Optional (0 = not selected) |

---

## 💡 Usage Examples

### Simple Form
```tsx
<FeedbackForm />
```

### With Handlers
```tsx
<FeedbackForm
  onSubmit={handleSubmit}
  onClose={handleClose}
/>
```

### Custom Styling
```tsx
<FeedbackForm className="max-w-4xl mx-auto" />
```

### In Modal
```tsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
  <div className="bg-white rounded-lg max-w-2xl w-full">
    <FeedbackForm onClose={closeModal} />
  </div>
</div>
```

### With Error Handling
```tsx
<FeedbackForm
  onSubmit={async (data) => {
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed');
    } catch (error) {
      console.error('Submission failed:', error);
      throw error; // Component shows error state
    }
  }}
/>
```

---

## 🔧 Backend Integration

### Minimal API Route
```typescript
// /api/feedback (POST)
export async function POST(req: NextRequest) {
  const data: FeedbackData = await req.json();
  
  // Validate
  if (!data.title || !data.description) {
    return NextResponse.json(
      { error: 'Missing fields' },
      { status: 400 }
    );
  }
  
  // Store in database
  const feedback = await db.feedback.create(data);
  
  // Optional: Send notification
  await sendNotification({
    to: 'admin@example.com',
    subject: `New Feedback: ${data.category}`,
    body: data.title
  });
  
  return NextResponse.json({ success: true, id: feedback.id });
}
```

---

## 🎯 Common Use Cases

### 1. Dashboard Widget
```tsx
export function DashboardFeedback() {
  const handleSubmit = async (data) => {
    // Send to backend
  };
  
  return (
    <Card padding="lg">
      <CardHeader>
        <CardTitle>Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <FeedbackForm onSubmit={handleSubmit} />
      </CardContent>
    </Card>
  );
}
```

### 2. Feedback Page
```tsx
export function FeedbackPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <FeedbackForm onClose={() => navigate('/')} />
    </div>
  );
}
```

### 3. Feedback Modal
```tsx
export function FeedbackModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-2xl">
        <FeedbackForm onClose={onClose} />
      </div>
    </div>
  );
}
```

### 4. Floating Button
```tsx
export function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-brand-primary text-white rounded-full w-14 h-14"
      >
        💬
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <FeedbackForm onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}
```

---

## ⚡ Performance Tips

1. **Lazy Load**: Use React.lazy for better code splitting
   ```tsx
   const FeedbackForm = lazy(() => import('@/components').then(m => ({ default: m.FeedbackForm })));
   ```

2. **Debounce Submit**: Prevent multiple submissions
   ```tsx
   const [isSubmitting, setIsSubmitting] = useState(false);
   // Check isSubmitting before allowing form submission
   ```

3. **Preload Component**: Load feedback form in background
   ```tsx
   useEffect(() => {
     import('@/components'); // Preload
   }, []);
   ```

---

## 🐛 Troubleshooting

### Component Not Showing
- Check `'use client'` directive at top of parent component
- Verify FeedbackForm imported from `@/components`
- Check Next.js is running dev server

### Validation Not Working
- Ensure `onSubmit` prop is provided
- Check browser console for errors
- Verify form fields have correct names

### Animations Choppy
- Check Framer Motion version (should be 10.16.4+)
- Verify GPU acceleration enabled
- Check for other animations conflicting

### Styling Issues
- Ensure Tailwind CSS is configured
- Check `tailwind.config.ts` has component paths
- Verify color classes exist (brand-primary, etc.)

---

## 📚 Related Components

- **Button** - Submit button with loading state
- **Card** - Container component
- **Badge** - Category display
- **LoadingState** - Loading animations (reference)

---

## 📖 Documentation Files

- `FEEDBACK_FORM_COMPLETION.md` - Feature details
- `FEEDBACK_FORM_USAGE_EXAMPLE.tsx` - 5 integration patterns
- `FEEDBACK_FORM_REQUIREMENTS_CHECKLIST.md` - Requirements verification
- `FEEDBACK_FORM_DELIVERY_SUMMARY.md` - Complete overview

---

## 🔐 Security Notes

✅ Client-side: Validates input format  
✅ Component: No XSS vulnerabilities  
⚠️ Backend: Should implement:
  - CSRF protection
  - Rate limiting
  - XSS sanitization
  - SQL injection prevention
  - Input validation

---

## 📞 Support

For issues or questions:
1. Check documentation files
2. Review usage examples
3. Check browser console for errors
4. Verify imports and component props

---

**Last Updated**: Current Session  
**Component Status**: ✅ Production Ready  
**Version**: 1.0.0
