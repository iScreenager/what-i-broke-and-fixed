#  Guest Login: Prevent Login Persistence After App Close

## ❌ Problem

I had implemented login for users using:
- Email/password
- Google login
- Guest login

All user data was being stored in `localStorage`. This meant even **guest users could reopen the app and stay logged in**, which was not the desired behavior.

---

##  What I Tried

- Checked where and how I was saving login data for all users.
- Realized all login types were using the same logic to store user info in `localStorage`.
- Wanted guest login to be **temporary**, only valid until the tab or app was closed.

---

##  Solution

Changed the storage mechanism:
- Regular users (email/password or Google): still using `localStorage`.
- Guest users: switched to `sessionStorage`.

**Example:**

```js
if (user.isGuest) {
  sessionStorage.setItem("user", JSON.stringify(user));
} else {
  localStorage.setItem("user", JSON.stringify(user));
}
````

On app load, I first check `sessionStorage`, then `localStorage`.

```js
const storedUser = JSON.parse(
  sessionStorage.getItem("user") || localStorage.getItem("user")
);
```

-----

## 💡 Takeaway

Use `sessionStorage` for temporary session data. It’s cleared automatically when the app or tab is closed — ideal for guest or demo users who shouldn't stay logged in.

```


This format makes it easy for future-you to remember *why* you made that decision and how you implemented it.

Would you like help creating a reusable snippet or utility function for this login storage logic?

