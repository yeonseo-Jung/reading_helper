# Frontend

## Tech

React Hook, Material-UI, SCSS, MVC pattern

## Start

remove package-lock.json

```sh
npm install
npm start
```

## Structure

- π frontend
  - π components [νμ΄μ§ λ΄μμ μ¬μ©λ  μ»΄ν¬λνΈ ν΄λ]
  - π pages [κ° νμ΄μ§μ Viewλ₯Ό κ΅¬μ±νλ ν΄λ]
  - π scss [μ»΄ν¬λνΈ, νμ΄μ§μ νμν μ€νμΌ μνΈ ν΄λ]
    - π base
    - π components
    - π pages
    - π main.scss (μΈλ±μ€ νμΌ)
  - π package.json
  - π App.js [ν΄λΉ νμΌμμλΆν° λ§ν¬λ³λ‘ νμ΄μ§κ° Routing λ©λλ€.]
  - π Root.js

## κ·μΉ

- index.js (μΈλ±μ€ νμΌ): κ° ν΄λλ§λ€ μ΄ νμΌμ μΈλ±μ€λ₯Ό μ§μ ν΄μΌ μΈλΆμμ import ν  μ μμ΅λλ€.
- scssνμΌμ νμΌλͺ λ§¨ μμ μΈλλ°(\_)λ₯Ό λΆμ¬μ€λλ€.
- jsνμΌμμ className=""μ νμ©ν΄ scssμ μ κ·Όν©λλ€.
