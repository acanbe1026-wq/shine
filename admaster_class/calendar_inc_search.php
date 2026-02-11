	<input type="date" max="9999-12-31" name="selstrdate" value="<?=$selstrdate?>" title="시작일자" id="cal1">
	~
	<input type="date" max="9999-12-31" name="selenddate" value="<?=$selenddate?>" title="종료일자" id="cal2">

	<span class="space20"></span>

	<p class="dateterm" now-item="cal2" data-item="cal1"> <!-- 이전일자 계산 -->
		<span data-item="7d">7일</span>
		<span data-item="14d">14일</span>
		<span data-item="1m">1개월</span>
		<span data-item="3m">3개월</span>
		<span data-item="0d">오늘</span>
	</p>