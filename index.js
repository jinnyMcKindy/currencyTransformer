
	
	var NumberToWords = {
		convertMoneyNumberInWords: function(n) {
			var res = "";
			if (n > 0) {
				res = res.concat(NumberToWords.convertNumberInWords(n,1));
				res = res.concat(" руб.");
			}
			var num2 = n * 100 % 100;			
			if (num2 > 0) {
				res = res.concat(" ").concat(NumberToWords.convertNumberInWords(num2,2)).concat(" коп.");
			}			
			return res;	
		},
		convertNumberInWords: function(n, type) {
			var st = "";
			var c = [];
			var s = [[], [], [], [], [], [], [], [], []];
			s[0][0] = "септиллион";
			s[0][1] = "септиллиона";
			s[0][2] = "септиллионов";
			s[1][0] = "секстиллион";
			s[1][1] = "секстиллиона";
			s[1][2] = "секстиллионов";
			s[2][0] = "квинтиллион";
			s[2][1] = "квинтиллиона";
			s[2][2] = "квинтиллионов";
			s[3][0] = "квадриллион";
			s[3][1] = "квадриллиона";
			s[3][2] = "квадриллионов";
			s[4][0] = "триллион";
			s[4][1] = "триллиона";
			s[4][2] = "триллионов";
			s[5][0] = "миллиард";
			s[5][1] = "миллиарда";
			s[5][2] = "миллиардов";
			s[6][0] = "миллион";
			s[6][1] = "миллиона";
			s[6][2] = "миллионов";
			s[7][0] = "тысяча";
			s[7][1] = "тысячи";
			s[7][2] = "тысяч";
			s[8][0] = "";
			s[8][1] = "";
			s[8][2] = "";

			c[0] = Math.floor(n / 1000000000000000000000000.0);
			c[1] = Math.floor(n % 1000000000000000000000000.0 / 1000000000000000000000.0);
			c[2] = Math.floor(n % 1000000000000000000000.0 / 1000000000000000000.0);
			c[3] = Math.floor(n % 1000000000000000000.0 / 1000000000000000.0);
			c[4] = Math.floor(n % 1000000000000000.0 / 1000000000000.0);
			c[5] = Math.floor(n % 1000000000000.0 / 1000000000.0);
			c[6] = Math.floor(n % 1000000000.0 / 1000000.0);
			c[7] = Math.floor(n % 1000000.0 / 1000.0);
			c[8] = Math.floor(n % 1000.0);

			for (var i = 0; i < 9; i++) {
				if (c[i] != 0) {
					if (parseInt(c[i] / 100) != 0) {
						switch (parseInt(c[i] / 100)) {
							case 1:
								st = st.concat(" сто");
								break;
							case 2:
								st = st.concat(" двести");
								break;
							case 3:
								st = st.concat(" триста");
								break;
							case 4:
								st = st.concat(" четыреста");
								break;
							case 5:
								st = st.concat(" пятьсот");
								break;
							case 6:
								st = st.concat(" шестьсот");
								break;
							case 7:
								st = st.concat(" семьсот");
								break;
							case 8:
								st = st.concat(" восемьсот");
								break;
							case 9:
								st = st.concat(" девятьсот");
								break;
						}
					}
					if (parseInt((c[i] % 100) / 10) != 1) {
						switch (parseInt((c[i] % 100) / 10)) {
							case 2:
								st = st.concat(" двадцать");
								break;
							case 3:
								st = st.concat(" тридцать");
								break;
							case 4:
								st = st.concat(" сорок");
								break;
							case 5:
								st = st.concat(" пятьдесят");
								break;
							case 6:
								st = st.concat(" шестьдесят");
								break;
							case 7:
								st = st.concat(" семьдесят");
								break;
							case 8:
								st = st.concat(" восемьдесят");
								break;
							case 9:
								st = st.concat(" девяносто");
								break;
						}
						switch (parseInt(c[i] % 10)) {
							case 1:
								if (i == 7 && type == 1) {
									st = st.concat(" одна");
								} else if(type == 1) {
									st = st.concat(" один");
								}
								if (type == 2) {
									st = st.concat(" одна");
								}								
								if (i < 7 && type == 3) {
									st = st.concat(" один");
								} else if(type == 3) {
									st = st.concat(" одна");									
								}								
								break;
							case 2:
								if (i == 7 && type == 1) {
									st = st.concat(" две");
								} else if(type == 1) {
									st = st.concat(" два");
								}
								if (type == 2) {
									st = st.concat(" две");
								}
								
								if (i < 7 && type == 3) {
									st = st.concat(" два");
								} else if(type == 3) {
									st = st.concat(" две");
									
								}

								break;
							case 3:
								st = st.concat(" три");
								break;
							case 4:
								st = st.concat(" четыре");
								break;
							case 5:
								st = st.concat(" пять");
								break;
							case 6:
								st = st.concat(" шесть");
								break;
							case 7:
								st = st.concat(" семь");
								break;
							case 8:
								st = st.concat(" восемь");
								break;
							case 9:
								st = st.concat(" девять");
								break;
						}
					} 
					else {
						switch (parseInt(c[i] % 100)) {
							case 10:
								st = st.concat(" десять");
								break;
							case 11:
								st = st.concat(" одиннадцать");
								break;
							case 12:
								st = st.concat(" двенадцать");
								break;
							case 13:
								st = st.concat(" тринадцать");
								break;
							case 14:
								st = st.concat(" четырнадцать");
								break;
							case 15:
								st = st.concat(" пятнадцать");
								break;
							case 16:
								st = st.concat(" шестнадцать");
								break;
							case 17:
								st = st.concat(" семнадцать");
								break;
							case 18:
								st = st.concat(" восемнадцать");
								break;
							case 19:
								st = st.concat(" девятнадцать");
								break;
						}
					}
					if ((parseInt(c[i] % 100) >= 10) && (parseInt(c[i] % 100) <= 19)) {
						st = st.concat(" " + s[i][2]);
					} 
					else {
						switch (parseInt(c[i] % 10)) {
							case 1:
								st = st.concat(" " + s[i][0]);
								break;
							case 2:
							case 3:
							case 4:
								st = st.concat(" " + s[i][1]);
								break;
							case 5:
							case 6:
							case 7:
							case 8:
							case 9:
							case 0:
								st = st.concat(" " + s[i][2]);
								break;
						}
					}
					if (Math.abs(n) > 29879798798797979798.0) {
						st = "Округлено! " +  st;
					}
				}		
			}

			var st = st.substring(1,2).toUpperCase() + st.substring(2);
			return st.trim();
		},
		convertNumberInWords2: function(n, type) {
			var st2 = "";
			var c2 = [];
			var s2 = [[], [], [], [], [], [], [], [], []];
			s2[0][0] = "септиллион";
			s2[0][1] = "септиллиона";
			s2[0][2] = "септиллионов";
			s2[1][0] = "секстиллион";
			s2[1][1] = "секстиллиона";
			s2[1][2] = "секстиллионов";
			s2[2][0] = "квинтиллион";
			s2[2][1] = "квинтиллиона";
			s2[2][2] = "квинтиллионов";
			s2[3][0] = "квадриллион";
			s2[3][1] = "квадриллиона";
			s2[3][2] = "квадриллионов";
			s2[4][0] = "триллион";
			s2[4][1] = "триллиона";
			s2[4][2] = "триллионов";
			s2[5][0] = "миллиард";
			s2[5][1] = "миллиарда";
			s2[5][2] = "миллиардов";
			s2[6][0] = "миллион";
			s2[6][1] = "миллиона";
			s2[6][2] = "миллионов";
			s2[7][0] = "тысяча";
			s2[7][1] = "тысячи";
			s2[7][2] = "тысяч";
			// s2[7][3] = "тыcячный";
			s2[8][0] = "";
			s2[8][1] = "";
			s2[8][2] = "";

			c2[0] = Math.floor(n / 1000000000000000000000000.0);
			c2[1] = Math.floor(n % 1000000000000000000000000.0 / 1000000000000000000000.0);
			c2[2] = Math.floor(n % 1000000000000000000000.0 / 1000000000000000000.0);
			c2[3] = Math.floor(n % 1000000000000000000.0 / 1000000000000000.0);
			c2[4] = Math.floor(n % 1000000000000000.0 / 1000000000000.0);
			c2[5] = Math.floor(n % 1000000000000.0 / 1000000000.0);
			c2[6] = Math.floor(n % 1000000000.0 / 1000000.0);
			c2[7] = Math.floor(n % 1000000.0 / 1000.0);
			c2[8] = Math.floor(n % 1000.0);
			
			for (var i = 0; i < 9; i++) {
				if (c2[i] != 0) {
					if (parseInt(c2[i] / 100) != 0) {
						switch (parseInt(c2[i] / 100)) {
							case 1:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" сотый");										
									} else  {
										st2 = st2.concat(" сто");					
								}		
								break;								
							case 2:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" двухсотый");										
									} else  {
										st2 = st2.concat(" двести");					
								}						
								break;
							case 3:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" трёхсотый");										
									} else  {
										st2 = st2.concat(" триста");					
								}															
								break;
							case 4:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" четырёхсотый");										
									} else  {
										st2 = st2.concat(" четыреста");								
								}													
								break;
							case 5:
								if (n.slice(-1) == 0) {	
									st2 = st2.concat(" пятисотый");								
									} else  {
										st2 = st2.concat(" пятьсот");										  
								}								
								break;
							case 6:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" шестисотый");										
									} else  {
										st2 = st2.concat(" шестьсот");								
								}								
								break;
							case 7:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" семисотый");										
									} else  {
										st2 = st2.concat(" семьсот");								
								}						
								break;
							case 8:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" восьмисотый");										
									} else  {
										st2 = st2.concat(" восемьсот");								
								}								
								break;
							case 9:
								if (n.slice(-1) == 0) {										
										st2 = st2.concat(" девятисотый");										
									} else  {
										st2 = st2.concat(" девятьсот");								
								}								
								break;
						}
					}
					if (parseInt((c2[i] % 100) / 10) != 1) {
						switch (parseInt((c2[i] % 100) / 10)) {
							case 2:
								st2 = st2.concat(" двадцать");
								break;
							case 3:
								st2 = st2.concat(" тридцать");
								break;
							case 4:
								st2 = st2.concat(" сорок");
								break;
							case 5:
								st2 = st2.concat(" пятьдесят");
								break;
							case 6:
								st2 = st2.concat(" шестьдесят");
								break;
							case 7:
								st2 = st2.concat(" семьдесят");
								break;
							case 8:
								st2 = st2.concat(" восемьдесят");
								break;
							case 9:
								st2 = st2.concat(" девяносто");
								break;
						}
						switch (parseInt(c2[i] % 10)) {
							case 1:
								if (i == 7 && type == 1) {
									st2 = st2.concat(" одна");
								} else if(type == 1) {
									st2 = st2.concat(" первый");  //одна
								}
								if (type == 2) {
									st2 = st2.concat(" одна");
								}								
								if (i < 7 && type == 3) {
									st2 = st2.concat(" один");
								} else if(type == 3) {
									st2 = st2.concat(" одна");									
								}								
								break;
							case 2:
								if (i == 7 && type == 1) {
									st2 = st2.concat(" две");
								} else if(type == 1) {
									st2 = st2.concat(" второй");  // два
								}
								if (type == 2) {
									st2 = st2.concat(" две");
								}
								
								if (i < 7 && type == 3) {
									st2 = st2.concat(" два");
								} else if(type == 3) {
									st2 = st2.concat(" две");									
								}
								break;
							case 3:
								st2 = st2.concat(" третий");  // три
								break;
							case 4:
								st2 = st2.concat(" четвертый");  // четыре
								break;
							case 5:
								st2 = st2.concat(" пятый");  // пять
								break;
							case 6:
								st2 = st2.concat(" шестой");  // шесть
								break;
							case 7:
								st2 = st2.concat(" седьмой"); // семь
								break;
							case 8:
								st2 = st2.concat(" восьмой");  // восемь
								break;
							case 9:
								st2 = st2.concat(" девятый");  // девять
								break;
						}
					} 
					else {
						switch (parseInt(c2[i] % 100)) {
							case 10:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" десять");
									} else if(type == 1) {
										st2 = st2.concat(" десятый");  
								}								
								break;
							case 11:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" одиннадцать");
									} else if(type == 1) {
										st2 = st2.concat(" одиннадцатый");  
								}								
								break;
							case 12:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" двенадцать");
									} else if(type == 1) {
										st2 = st2.concat(" двенадцатый"); 
								}								
								break;
							case 13:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" тринадцать");
									} else if(type == 1) {
										st2 = st2.concat(" тринадцатый");  
								}								
								break;
							case 14:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" четырнадцать");
									} else if(type == 1) {
										st2 = st2.concat(" четырнадцатый");  
								}
								break;
							case 15:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" пятнадцать");
									} else if(type == 1) {
										st2 = st2.concat(" пятнадцатый");  
								}								
								break;
							case 16:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" шестнадцать");
									} else if(type == 1) {
										st2 = st2.concat(" шестнадцатый");
								}								
								break;
							case 17:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" семнадцать");
									} else if(type == 1) {
										st2 = st2.concat(" семнадцатый");
								}								
								break;
							case 18:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" восемнадцать");
									} else if(type == 1) {
										st2 = st2.concat(" восемнадцатый");
								}								
								break;
							case 19:
								if (i == 7 && type == 1) {
										st2 = st2.concat(" девятнадцать");
									} else if(type == 1) {
										st2 = st2.concat(" девятнадцатый");
								}								
								break;
						}
					}
					if ((parseInt(c2[i] % 100) >= 10) && (parseInt(c2[i] % 100) <= 19)) {
						st2 = st2.concat(" " + s2[i][2]);
					} 
					else {
						switch (parseInt(c2[i] % 10)) {
							case 1:
								st2 = st2.concat(" " + s2[i][0]);
								break;
							case 2:
							case 3:
							case 4:
								st2 = st2.concat(" " + s2[i][1]);
								break;
							case 5:
							case 6:
							case 7:
							case 8:
							case 9:
							case 0:
								st2 = st2.concat(" " + s2[i][3]);
								break;
						}
					}
					if (Math.abs(n) > 29879798798797979798.0) {
						st2 = "Округлено! " +  st2;
					}
				}		
			}

			var st2 = st2.substring(1,2).toUpperCase() + st2.substring(2);	
			return st2.trim();
		}
	}

	var r = /\s+/g;
		
	function getNominal(n, currency='Ruble') {	
		var last, onebeflast, TotalResultNominal, nominal = n.toString();	
		var answerbottom = '';
		onebeflast = ((nominal % 100) - ((nominal % 100) % 10))/10;
		last = nominal % 10;
		if ( currency == "ruble" ) {
			if (onebeflast == 1) {answerbottom =' российских рублей';} 
			else if ((last == 0 || last > 4) && nominal != '') {answerbottom =' российских рублей';} 
			else if (last > 1) {answerbottom = ' российских рубля';}
			else {answerbottom = ''}	
		}
		if ( currency == "US" ) {
			if (onebeflast == 1) {answerbottom =' долларов США';} 
			else if ((last == 0 || last > 4) && nominal != '') {answerbottom =' долларов США';} 
			else if (last > 1) {answerbottom = ' доллара США';}
			else {answerbottom = ''}	
		}

		if ( currency == "euro" ) {
			if (onebeflast == 1) {answerbottom =' евро';} 
			else if ((last == 0 || last > 4) && nominal != '') {answerbottom =' евро';} 
			else if (last > 1) {answerbottom = ' евро';}
			else {answerbottom = ''}	
		}


		if ( currency == "pounds" ) {
			if (onebeflast == 1) {answerbottom =' фунтов стерлингов';} 
			else if ((last == 0 || last > 4) && nominal != '') {answerbottom =' фунтов стерлингов';} 
			else if (last > 1) {answerbottom = ' фунта стерлингов';}
			else {answerbottom = ''}	
		}
		
		var TotalResultNominal = n +' (' + NumberToWords.convertNumberInWords(nominal.replace(',','.'), 1) + ')' + answerbottom
		if (TotalResultNominal == ' ()') {TotalResultNominal = n + ''}	
		return TotalResultNominal;
	}
	
	function convertDayToWords(p) {	

		var last, onebeflast, period = p.toString();
		var answerbottom = '';	
		onebeflast = ((period % 100) - ((period % 100) % 10))/10;
		last = period % 10;
		if (onebeflast == 1) {answerbottom = ' дней';} 
		else if ((last == 0 || last > 4) && period != '') {answerbottom = ' дней';} 
		else if (last == 1) {answerbottom = ' день';} 
		else if (last > 1) {answerbottom = ' дня';}
		else {answerbottom = ''}

		var TotalResult = p + ' (' + NumberToWords.convertNumberInWords(period.replace(',','.'), 1) + ')' + answerbottom
		if (TotalResult == ' ()') {TotalResult = p + ''}		
		return TotalResult
	}

	function convertNumToWords(a) {
		var TotalResult = '', amount = a.toString();

		if (amount > 0) {
			TotalResult = ' (' + NumberToWords.convertNumberInWords(amount.replace(',','.'), 1) + ')';			
		}
		
		var num2 = amount.replace(',','.') * 100 % 100;
		// console.log(num2)
		if (num2 > 0) {
			TotalResult = ' (' + NumberToWords.convertNumberInWords(amount.replace(',','.'), 1) + " целых " + NumberToWords.convertNumberInWords(num2,2) + " сотых" + ')';
		}
		
		if (TotalResult == ' ()') {TotalResult = ''}		
		return a + TotalResult
	}
	
export default {
	convertDayToWords,
	convertNumToWords,
	getNominal
}



