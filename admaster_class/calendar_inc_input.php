	<input type="date" max="9999-12-31" name="str_date" value="<?=strHtml($Result[0]["str_date"])?>" title="시작일자" id="cal1">
	~
	<input type="date" max="9999-12-31" name="end_date" value="<?=strHtml($Result[0]["end_date"])?>" title="종료일자" id="cal2">	

	<p class="dateterm" now-item="cal1" data-item="cal2"> <!-- 차후일자 계산 -->
		<span data-item="7d">7일</span>
		<span data-item="14d">14일</span>
		<span data-item="1m">1개월</span>
		<span data-item="3m">3개월</span>
		<span data-item="close">종료</span>
	</p>




