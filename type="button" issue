🐛 **Issue: Unexpected "Login Failed: Invalid Email or Password" Toast on Google/Guest Login**

---

### ❓ Problem

When users click **"Login with Google"** or **"Login as Guest"**, the app displays a toast message:

> "Login Failed: Invalid Email or Password"
> 

Even though no form data (email/password) was entered or required.

### 🔍 Root Cause

Inside the login form:

- All buttons without a defined `type` **default to `type="submit"`** in HTML.
- So, clicking **Google** or **Guest** buttons triggered the form’s `onSubmit={handleSign}` unintentionally.
- `handleSign` then tried to validate empty `email` and `password`, showing an error toast.

### ✅ Solution

Explicitly set the button type for **non-submit** buttons to prevent form submission:

```tsx
{/* ✅ Guest Login Button */}
<Button type="button" onClick={guestSign} variant="outline" className="w-full">
  Login as Guest
</Button>

```

```tsx
{/* ✅ Google Login Button */}
<Button type="button" onClick={googleSign} variant="outline" className="w-full">
  Login with Google
</Button>

```

```tsx
{/* ✅ Actual Submit Button */}
<Button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
>
  Login
</Button>

```

---

### 💡 Tip

Whenever using buttons inside a `<form>`, always define the `type`:

- `type="submit"` → triggers form submission
- `type="button"` → prevents default submit behavior

This small fix avoids accidental triggering of your `handleSign` logic for actions unrelated to form submission.

Let me know if you'd like help creating a reusable `<FormButton>` component that auto-detects and sets the correct `type`.
