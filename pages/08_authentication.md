---
title: Authentication - Passwords, Passphrases and MFA
hideInToc: false
---

# Authentication - Passwords, Passphrases and MFA

---

# What is authentication?

- Authentication is the process of verifying the identity of a user or system.
- It ensures that the entity requesting access is who they claim to be.
- Login credentials, such as usernames and passwords, are commonly used for authentication, but other methods are increasingly being adopted

---

# Passwords and Password Policies

- A password is a secret string of characters used to authenticate a user.
- Because some passwords are easy to guess, organisations often implement password policies to enforce stronger passwords.
- Password policies may include requirements for:
  - minimum length
  - complexity (e.g., including uppercase letters, numbers, and special characters)
  - password change frequency

---
layout: center
---

# Attacks on Passwords

- **Brute-force attacks**: Attackers systematically try every possible combination of characters until the correct password is found.
- **Dictionary attacks**: Attackers use a list of common passwords or words to guess the password.
- **Phishing attacks**: Attackers trick users into revealing their passwords through fake websites or emails.
- **Credential stuffing**: Attackers use stolen username and password combinations from one service to gain access to other services where users may have reused the same credentials.
- **Keylogging**: Attackers use malicious software to record keystrokes and capture passwords as they are typed.
- **Social engineering**: Attackers manipulate users into revealing their passwords through deception or manipulation (or viewing post-it notes on people's desks).

---

# Investigate Brute-force and Dictionary Attacks

Navigate to the "Brute-force Password Cracker" at [https://mrmatho.github.io/tools/password-cracker.html](https://mrmatho.github.io/tools/password-cracker.html) - link also on lesson plan.

- Identify how the number of attempts change based on length, commonality and complexity of the password.
- Record any patterns you notice in the results.

(10 mins)

---
layout: two-cols-header
---

# Common passwords (to avoid)

::left::

- "123456"
- "password"
- "qwerty"
- "abc123"
- "letmein"

::right::

- Personal information (e.g., birthdates, names)
- Common words or phrases
- Repeated characters (e.g., "aaaaaa")
- Keyboard patterns (e.g., "qwerty", "asdfgh")

---
layout: center
---

# What makes a good password?

A good password should be:

- Long (at least 12 characters)
- Complex (a mix of uppercase, lowercase, numbers, and special characters)
- Unique (not used for multiple accounts)

However - when a password becomes too difficult to remember, users sometimes:

- Write it down in an insecure location
- Use the same password for multiple accounts
- Are more likely to give their password to others

---
layout: center
---

# Password Managers

Password managers are tools that help users generate, store, and manage their passwords securely. They can:

- Generate strong, unique passwords for each account
- Store passwords in an encrypted format
- Autofill login credentials on websites and apps

---
layout: two-cols
---

## Benefits of using a password manager

- Reduces the risk of using weak or reused passwords
- Simplifies the process of managing multiple accounts
- Stores passwords securely
- Can generate strong passwords automatically
- Reduces the effort required to use complex passwords

::right::

## Disadvantages of using a password manager

- Single point of failure: if the password manager is compromised, all stored passwords may be at risk
- Can lead to over-reliance on the tool, potentially reducing users' ability to remember passwords
- Requires the availability of the password manager software or service, which may not always be accessible

---
layout: center
---

# Passphrases

- A passphrase is a longer sequence of words or characters used for authentication. 
- They are often easier to remember than complex passwords.
- Passphrases are often more secure due to their length.
- Some examples of passphrases include:
  - "CorrectHorseBatteryStaple"
  - "I love to code in Python!"
  - "My dog is my best friend"

<div class="note">

Write your own passphrase into the Brute-force Password Cracker. Without actually running the attack (this will take too long), compare the number of attempts it would take with the passwords you tested earlier. (3 mins)

</div>

---

# Multi-factor Authentication (MFA)

- Multi-factor authentication (MFA), also known as two-factor authentication (2FA), is a security measure that requires users to provide two or more forms of verification to access an account or system.
- The factors typically fall into three categories:
  - Something you know (e.g., password, PIN)
  - Something you have (e.g., smartphone, hardware token)
  - Something you are (e.g., fingerprint, facial recognition)

<div class="note">

Find a provider of MFA, and identify the different types of MFA they offer. (5 mins)

</div>

---
layout: center
---

# What makes a secure password policy for an organisation?

- Sensible password length and complexity requirements
  - Balance between security and usability
- Regular password changes (but not too frequent)
- Multi-factor authentication (MFA) wherever possible
- Education and awareness for users about password security

---
layout: two-cols-header
---

# Questions

::left::

1. What is the difference between a password and a passphrase?
2. What are some common attacks on passwords?
3. What are the benefits and disadvantages of using a password manager?
4. What are the three categories of factors used in multi-factor authentication (MFA)?

::right::

5. Why is authentication important for cybersecurity?

<div class="note">

Create a poster with helpful hints for school students and staff on creating good password habits

</div>
