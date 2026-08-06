---
title: Cryptography in Cybersecurity
hideInToc: false
---

# Cryptography in Cybersecurity

You have completed exercises investigating cryptography methods, but how does cryptography fit into the bigger picture of cybersecurity?

- What is the role of cryptography in cybersecurity?
- Symmetric vs asymmetric encryption - what are the differences and when would you use one over the other?

---
layout: center
---

# What is the role of Cryptography in Cybersecurity

- Cryptography is the practice of securing information by transforming it into an unreadable format, ensuring that only authorized parties can access it.
- Cryptography is used to:
  - protect sensitive data
  - maintain confidentiality
  - ensure data integrity
  - authenticate users and systems

---
layout: two-cols-header
zoom: 0.95
---

# Protecting Sensitive Data

When protecting sensitive data, we need to consider the type of data being protected and the potential threats it may face.

::left::

## Stored Data

Stored data is any data that is saved on a device or server, such as files, databases, or backups.

Stored data is vulnerable to threats such as:

- **Unauthorized access:** Attackers may attempt to gain access to stored data through hacking, malware, or physical theft of devices.
- **Data breaches:** If an attacker gains access to stored data, they may steal sensitive information, such as personal data, financial information, or trade secrets.
- **Data corruption:** Attackers may attempt to modify or delete stored data, which can lead to loss of information or disruption of services.

::right::

## Transmitted Data

Transmitted data is any data that is sent over a network, such as emails, instant messages, or file transfers.

Transmitted data is vulnerable to threats such as:

- **Eavesdropping:** Attackers may intercept transmitted data to gain access to sensitive information, such as login credentials or financial data.
- **Man-in-the-middle attacks:** Attackers may intercept and modify transmitted data, which can lead to unauthorized access or data corruption.
- **Replay attacks:** Attackers may capture and retransmit transmitted data to gain unauthorized access or disrupt services.

---
layout: center
---

# Symmetric vs Asymmetric Encryption

Symmetric encryption uses one shared key to encrypt and decrypt data. Asymmetric encryption uses two keys: a public key and a private key.

- **Symmetric encryption** is usually faster and better for large amounts of data, but a ***shared key*** must be kept secure.
- **Asymmetric encryption** is usually slower for large data, but key sharing is safer because the private key stays secret and only the public key is shared.

> **Symmetric**: shared key
>
> **Asymmetric**: public/private key pair

---
layout: center
---

# Questions

## Case Study:

> Recently, a company experienced a data breach where sensitive customer information was stolen. The attackers gained access to the company's database and but were unable to read the data because it was encrypted.

1. What type of encryption was likely used in this case?
2. What type of data was being protected (stored or transmitted)?
3. What would the attackers need to find in order to decrypt the data?
