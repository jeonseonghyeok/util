 $('#outBtn').on('click', function() {
				let input1 = $('#inputList').val().split('\n').map(item => item.trim()).filter(item => item !== "");
                let input2 = new Set($('#outList').val().split('\n').map(item => item.trim()));

                // Filter out items from input1 that exist in input2
                let result = input1.filter(item => !input2.has(item));
				// Capture items that are removed
				let removedItems = input1.filter(item => input2.has(item));
                
				// Show alert with removed items
				if (removedItems.length > 0) {
					alert('제거된 항목('+removedItems.length+'행):\n' + removedItems.join('\n'));
				} else {
					alert('제거할 항목이 없습니다.');
					return 0;
				}
				
                $('#inputList').val(result.join('\n'));
				$('#outList').val('');
            });
$('#copyBtn').on('click', function() {
	copyText($('#inputList').val());
	alert('입력부 명단이 복사되었습니다!');
});


//새로운 임시 요소를 만들어 텍스트를 복사를 수행하고 제거
function copyText(textToCopy) {
	var tempInput = $('<textarea>');
	$('body').append(tempInput);
	tempInput.val(textToCopy).select();
	document.execCommand('copy');
	tempInput.remove();
}


