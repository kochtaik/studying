function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      winner: null,
      gameLog: [],
    };
  },
  methods: {
    restartGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.winner = null;
      this.gameLog = [];
    },

    attackMonster() {
      this.round += 1;
      const value = getRandomInRange(5, 12);
      this.monsterHealth -= value;
      this.createLogMessage('player', 'attack', value);
      this.attackPlayer();
    },

    attackPlayer() {
      const value = getRandomInRange(8, 15);
      this.playerHealth -= value;
      this.createLogMessage('monster', 'attack', value);
    },

    specialAttackMonster() {
      this.round += 1;
      const value = getRandomInRange(10, 25);
      this.monsterHealth -= value;
      this.createLogMessage('player', 'attack', value);
      this.attackPlayer();
    },

    heal() {
      this.round += 1;
      const value = getRandomInRange(8, 20);
      if (this.playerHealth + value > 100) this.playerHealth = 100;
      else this.playerHealth += value;
      this.createLogMessage('player', 'heal', value);
      this.attackPlayer();
    },

    surrender() {
      this.winner = 'monster';
    },

    createLogMessage(assaulter, action, value) {
      const message = {
        who: assaulter,
        what: action,
        points: value,
      };
      this.gameLog.unshift(message);
    },
  },
  computed: {
    playerHealthbar() {
      if (this.playerHealth < 0) return { width: '0%' };
      return { width: `${this.playerHealth}%` };
    },

    monsterHealthbar() {
      if (this.monsterHealth < 0) return { width: '0%' };
      return { width: `${this.monsterHealth}%` };
    },

    specialAttackEnabled() {
      return this.round % 3 !== 0;
    },
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) this.winner = 'draw';
      else if (value <= 0) this.winner = 'player';
    },

    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) this.winner = 'draw';
      else if (value <= 0) this.winner = 'monster';
    },
  },
});

app.mount('#game');
