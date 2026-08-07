---
theme: default
title: Phishing and Social Engineering
hideInToc: false
---

# Phishing and Social Engineering

---
layout: center
class: ns-c-tight
---

# What is Phishing?

- **Phishing** is a type of cyber attack that uses social engineering techniques to trick individuals into revealing sensitive information, such as usernames, passwords, or credit card numbers.
- Phishing attacks often come in the form of emails, text messages, or phone calls that appear to be from legitimate sources.

## Social Engineering?

- **Social engineering** is the use of manipulation to trick individuals into divulging confidential information or performing actions that may compromise security.

---
layout: center
zoom: 1.2
---

# Phishing and Social Engineering Techniques

- **Email Phishing:** Attackers send fraudulent emails that appear to be from legitimate sources, often containing links to fake websites or attachments that contain malware.
- **Spear Phishing:** A targeted form of phishing that is directed at specific individuals or organizations, often using personal information to make the attack more convincing.
- **Vishing:** A type of phishing that uses phone calls to trick individuals into revealing sensitive information.
- **Smishing:** A type of phishing that uses text messages to trick individuals into revealing sensitive information.

I don't need you to remember these names (I usually don't), but the important thing to remember is how phishing and social engineering attacks work, and how to protect yourself and other people from them.

---
layout: center
zoom: 1.3
---

# Signs of Phishing and Social Engineering Attacks

- **Suspicious Emails or Messages:** Contain spelling or grammatical errors, urgent requests, or unfamiliar senders.
- **Unusual Requests:** Ask for sensitive information, such as passwords or financial information, or request that you perform actions that seem unusual or suspicious.
- **Fake Websites:** Appear to be legitimate but have slight variations in the URL or design, often used to steal login credentials or personal information.

---
layout: center
zoom: 1.1
---

# Spotting a Fake Website link

One useful way to identify possible phishing or social engineering attacks is to check the URL of a website before entering any sensitive information. In an email you can see the URL by hovering over the link, and on a website you can see the URL in the address bar of your browser.

A **domain name** is the part of a URL that identifies the website, and it can be used to help determine whether a website is legitimate or not.

**Example:**
- In the web address `https://www.thisisarealwebsite.com/this-is-a-page`, the domain name is `thisisarealwebsite.com`.
- In the web address `https://www.thisisafakewebsite.com/this-is-a-page`, the domain name is `thisisafakewebsite.com`.
- In the web address `https://www.thisisarealwebsite.com.thisisafakewebsite.com/this-is-a-page`, the domain name is `thisisafakewebsite.com`
  - The earlier parts (www.thisisarealwebsite.com) are subdomains
  - The actual domain is the last part before the first forward slash.

---
layout: center
zoom: 1.2
---

# TLDs and Country Codes

- A **TLD (top-level domain)** is the last part of a domain name, such as `.com`, `.org`, `.edu` or `.net`.
  - Common TLDs are less likely to be used in phishing attacks
  - Some TLDs are more likely to be used in phishing attacks, such as `.xyz`, `.top`, `.club`, `.info`, and `.online`.
- A **country code** is a two-letter code that identifies the country or territory associated with a domain name, such as `.au` for Australia, `.uk` for the United Kingdom, or `.us` for the United States.
  - Some country codes are more likely to be used in phishing attacks, such as `.ru`, `.cn`, and `.kp`.
  - This is not about the country themselves, but about how easy (or difficult) it is to register a domain name in that country.

---
layout: center
---

# Other Social Engineering Vulnerabilities

- Posing as a trusted individual or authority figure to gain access to sensitive information or systems.
  - IT Technicians, Managers, Police Officers, Bank Staff, etc.
- Using fear, urgency, or other emotional manipulation to pressure individuals into taking actions that may compromise security.
  - "Your account has been compromised, click this link to reset your password"
  - "You have won a prize, click this link to claim it"

---
layout: center
---

# Strategies to Protect Against Phishing and Social Engineering

- **Education**: Giving individuals and organizations the knowledge and skills to recognize and respond to phishing and social engineering attacks.
- **Clear Policies for Reporting**: Establishing clear policies and procedures for reporting suspected phishing and social engineering attacks, and encouraging individuals to report any suspicious activity.
- **Technical Controls**: Implementing technical controls, such as email filters, firewalls, and intrusion detection systems, to help prevent phishing and social engineering attacks from reaching individuals and organizations.
- **Multi-Factor Authentication (MFA)**: Requiring multiple forms of authentication, such as a password and a fingerprint or a password and a one-time code sent to a mobile device, to help prevent unauthorized access to sensitive information and systems.

---
layout: center
---

# Encrypting Passwords - linking to Cryptography

When passwords are stored, they should be encrypted using one-way hashing algorithms (such as SHA-256 or bcrypt). This means that even if an attacker gains access to the stored passwords, they will not be able to read them.

The passwords should also be salted, which means a random value is added to the password before it is hashed. This makes it more difficult for attackers to use precomputed tables (rainbow tables) to crack the passwords.

```mermaid 

graph LR

  A[User enters password] --> B[Password is salted with a random value]
  B --> C[Password is hashed using a one-way hashing algorithm]
  C --> D[Hashed password is stored in the database]
  D --> E[When user logs in, password is salted and hashed before checking]

---
layout: center
---

# Questions

1. What is the difference between phishing and social engineering?
2. Describe three common techniques used in phishing and social engineering attacks?
3. Which of the following are likely to be illegitimate websites? (Check all that apply)
   - `https://www.bankofamerica.com/login`
   - `https://bankofvictoria.com.extraz.com/login`
   - `https://login.xyz/www.commbank.com.au`
   - `https://nab.com.au/login`
4. A phishing attack has been thwarted by a vigilant employee at a medium-sized office based business. What are three things the company can do to help prevent future attacks? Provide clear examples for each suggestion.

---