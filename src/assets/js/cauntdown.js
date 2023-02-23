const countdown = {
  COUNTDOWN_START: new Date(),
  COUNTDOWN_END: '',
  DATA_YEAR: '',
  DATA_DAY: '',
  DATA_MOUTH: '',
  DATA_HOUR: '',
  DATA_MINUTES: '',
  DATA_SECONDS: '',
  set() {
    console.log(this.COUNTDOWN_START);

    let _this = this;

    _this.DATA_YEAR = _this.COUNTDOWN_START.getFullYear(); // 西暦
    _this.DATA_MOUTH = _this.COUNTDOWN_START.getMonth(); // 月（0~11）
    _this.DATA_DAY = _this.COUNTDOWN_START.getDay(); // 曜日（0~6）
    _this.DATA_HOUR = _this.COUNTDOWN_START.getHours(); // 時間
    _this.DATA_MINUTES = _this.COUNTDOWN_START.getMinutes(); // 分
    _this.DATA_SECONDS = _this.COUNTDOWN_START.getSeconds(); // 分

    function countData() {
      _this.COUNTDOWN_START = new Date();
      console.log(_this.DATA_YEAR,_this.DATA_MOUTH,_this.DATA_DAY,_this.DATA_HOUR,_this.DATA_MINUTES,_this.DATA_SECONDS);
      console.log(_this.COUNTDOWN_START)
      setTimeout(countData,1000);
    }
    countData();
  },
  init() {
    countdown.set();
  }
};

countdown.init();