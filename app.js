// ==========================================
// 1. ESTRATEGIAS (Comportamientos aislados)
// ==========================================

// Estrategia 1: Pago con Tarjeta de Crédito
class CreditCardPayment {
  pay(amount) {
    console.log(`[Tarjeta] Procesando $${amount} con Tarjeta de Crédito... ¡Pago aprobado!`);
  }
}

// Estrategia 2: Pago con PayPal
class PayPalPayment {
  pay(amount) {
    console.log(`[PayPal] Redirigiendo a la API de PayPal para cobrar $${amount}... ¡Confirmado!`);
  }
}

// Estrategia 3: Pago con Criptomonedas
class CryptoPayment {
  pay(amount) {
    console.log(`[Crypto] Verificando transacción en Blockchain por $${amount}... ¡Exitoso!`);
  }
}

// ==========================================
// 2. CONTEXTO (Clase principal desacoplada)
// ==========================================
class ShoppingCart {
  constructor(paymentStrategy) {
    // Guarda la estrategia seleccionada
    this.paymentStrategy = paymentStrategy;
  }

  // Permite cambiar de estrategia dinámicamente
  setPaymentStrategy(strategy) {
    this.paymentStrategy = strategy;
  }

  checkout(amount) {
    if (!this.paymentStrategy) {
      console.log("Error: Selecciona un método de pago.");
      return;
    }
    // Delega la ejecución a la estrategia actual
    this.paymentStrategy.pay(amount);
  }
}

// ==========================================
// 3. DEMOSTRACIÓN DE USO
// ==========================================
console.log("=== DEMOSTRACIÓN DEL PATRÓN ESTRATEGIA ===");

// Cliente paga con Tarjeta
const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100);

// Cambia de opinión y decide pagar con PayPal
cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(50);

// Otro pago usando Criptomonedas
cart.setPaymentStrategy(new CryptoPayment());
cart.checkout(200);