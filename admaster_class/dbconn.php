<?php 
$pNowDate=date("Y-m-d");
$pNoDataMsg="<p class='noData'>검색된 정보가 없습니다.</p>";

//디비인젝션
$searchkey=injecFilter($searchkey);		
$searchvalue=injecFilter($searchvalue);		
$code=injecFilter($code);
$seq=injecFilter($seq);
$page=injecFilter($page);

$pCommVal="searchkey=".$searchkey."&amp;";
$pCommVal.="searchvalue=".$searchvalue."&amp;";
$pCommVal.="code=".$code;

$pCommLink=$pHtmlLink."?".$pCommVal."&amp;page=".$page;
$pPageLink=$pHtmlLink."?".$pCommVal;
$pExecLink="?pHtmlLink=".$pHtmlLink."&amp;".$pCommVal;

$pSubmitHidden="
	<input type='hidden' name='pHtmlLink' value='".$pHtmlLink."' />
	<input type='hidden' name='searchkey' value='".$searchkey."' />		
	<input type='hidden' name='searchvalue' value='".$searchvalue."' />		
	<input type='hidden' name='code' value='".$code."' />
	<input type='hidden' name='seq' value='".$seq."' />
	<input type='hidden' name='page' value='".$page."' />
";
$pSubmitHiddenList="
	<input type='hidden' name='pHtmlLink' value='".$pHtmlLink."' />
	<input type='hidden' name='searchkey' value='".$searchkey."' />		
	<input type='hidden' name='searchvalue' value='".$searchvalue."' />		
	<input type='hidden' name='code' value='".$code."' />
	<input type='hidden' name='page' value='".$page."' />
";

class DBConn
{
	var $mConn;

	function __construct()
	{
		try {
			$this->mConn = new PDO('mysql:host=localhost;dbname=HOME;charset=utf8','wuser','wuser@DBpass');
			$this->mConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
		}catch (PDOException $e ) {
			echo "Failed to get DB handle: " . $e->getMessage() . "\n";
			exit;			
		}		
	} // end function

	function DisConnect()
	{
		$this->mConn = null;
	}

} // end class

class PageOut
{
	var $mLimitStart;
	var $mSizePage;
	var $mListAll;
	var $mStartPage;
	var $mEndPage;
	var $mLastPage;
	var $mCurrPage;
	var $mPageSet;

	function __construct($pListAll, $pCurrPage)
	{
		$pSizePage=20; //리스트 갯수
		$pPageSet=20; //페이지 갯수

		global $pSizePageNew;
		if(intval($pSizePageNew) > 0) $pSizePage=$pSizePageNew;

		global $pPageSetNew;
		if(intval($pPageSetNew) > 0) $pPageSet=$pPageSetNew;

		$pLastPage = (int)($pListAll / $pSizePage);
		if( $pListAll % $pSizePage > 0 ) $pLastPage += 1;
		if( $pListAll==0 ) $pLastPage = 1;

		if($pCurrPage > $pLastPage) $pCurrPage=$pLastPage; //페이지 이동 오류 확인
		if(intval($pCurrPage) < 1) $pCurrPage=1;
 

		if ($pCurrPage > $pLastPage) $pCurrPage = $pLastPage;
		elseif ($pCurrPage < 1 ) $pCurrPage = 1;

		$pPrePage = $pCurrPage - 1;
		if( $pCurrPage + 1 > $pLastPage ) $pNextPage = 0;
		else $pNextPage = $pCurrPage + 1;

		$pCurrPageImsi = ((int)($pCurrPage / $pPageSet))*$pPageSet + 1;
		if((int)($pCurrPage % $pPageSet) == 0 ) $pStartPage = $pCurrPageImsi - $pPageSet;
		else $pStartPage = $pCurrPageImsi;

		$pEndPage = $pStartPage + $pPageSet-1;
		if( $pEndPage > $pLastPage ) $pEndPage = $pLastPage;

		$pLimitStart=($pCurrPage - 1) * $pSizePage;

		$this->mLimitStart=$pLimitStart;
		$this->mSizePage=$pSizePage;
		$this->mListAll=$pListAll;

		$this->mStartPage=$pStartPage;
		$this->mEndPage=$pEndPage;
		$this->mLastPage=$pLastPage;
		$this->mCurrPage=$pCurrPage;
		$this->mPageSet=$pPageSet;
	}

	function AdminPageList($pCommLink)
	{
		$pPreImg="<img src='./images/arrL_02.png'>이전";
		$pNextImg="다음<img src='./images/arrR_02.png'>";

		echo "
					<ul>
                        <li><a href='".$pCommLink."&page=1'>1</a></li>
                        <li><a>...</a></li>
		";

		for($i=$this->mStartPage; $i<=$this->mEndPage; $i++){
			if($i==$this->mCurrPage) echo "<li><a href='".$pCommLink."&page=".$i."' class='active'>$i</a></li>\n";
			else echo "<li><a href='".$pCommLink."&page=".$i."'>$i</a></li>\n";
		}

		echo "
                        <li><a>...</a></li>
                        <li><a href='".$pCommLink."&page=".$this->mLastPage."'>".$this->mLastPage."</a></li>
                    </ul>
                    <div class='pgn_right'>
                        <div class='paging_tool'>
		";

		if($this->mStartPage>$this->mPageSet) {
			$pImsiPage=$this->mStartPage-$this->mPageSet;
			echo "<a href='".$pCommLink."&page=".$pImsiPage."'>$pPreImg</a>\n";
		} else echo "<a>$pPreImg</a>\n";

		echo "
                            <div class='page_input'>
                                <input type='text' id='go_page' value='' placeholder='페이지입력' class='numberOnly'>
                                <button type='button' id='goPage'>이동</button>
                            </div>
		";

		if($this->mEndPage<$this->mLastPage) {
			$pImsiPage=$this->mStartPage+$this->mPageSet;
			echo "<a href='".$pCommLink."&page=".$pImsiPage."' >$pNextImg</a>\n";
		} else echo "<a >$pNextImg</a>\n";

		echo "
                        </div>
                    </div>
		";

	}

	function PageList($pCommLink)
	{
		$pPreImgN="<img src='/images/page_first.png' alt='처음 페이지' title='처음 페이지' />";
		$pPreImg="<img src='/images/page_prev.png' alt='이전 10 페이지' title='이전 10 페이지' />";
		$pNextImg="<img src='/images/page_next.png' alt='다음 10 페이지' title='다음 10 페이지' />";
		$pNextImgN="<img src='/images/page_last.png' alt='마지막 페이지' title='마지막 페이지' />";

		echo "<a href='".$pCommLink."&page=1' class='page_first'>$pPreImgN</a>\n";

		if($this->mStartPage>$this->mPageSet) {
			$pImsiPage=$this->mStartPage-$this->mPageSet;
			echo "<a href='".$pCommLink."&page=".$pImsiPage."' class='page_prev'>$pPreImg</a>\n";
		} else echo "<a class='page_prev'>$pPreImg</a>\n";

		echo "<ul>";
		for($i=$this->mStartPage; $i<=$this->mEndPage; $i++){
			if($i==$this->mCurrPage) echo "<li><a href='".$pCommLink."&page=".$i."' class='selected'>$i</a></li>\n";
			else echo "<li><a href='".$pCommLink."&page=".$i."'>$i</a></li>\n";
		}
		echo "</ul>";

		if($this->mEndPage<$this->mLastPage) {
			$pImsiPage=$this->mStartPage+$this->mPageSet;
			echo "<a href='".$pCommLink."&page=".$pImsiPage."' class='page_next'>$pNextImg</a>\n";
		} else echo "<a class='page_next'>$pNextImg</a>\n";

		echo "<a href='".$pCommLink."&page=".$this->mLastPage."' class='page_last'>$pNextImgN</a>\n";
	}

}
?>
