// var formEl = $('#skills-form');
// var nameInputEl = $('#skill-name');
// var dateInputEl = $('#datepicker');
// var skillsListEl = $('#skills-list');
jQuery( function ()
{
	setup();
} );


// ---------------------------------------------------------------------------------------------- //
/*	setup
*/
// ---------------------------------------------------------------------------------------------- //

function setup()
{
	$('#dialog').dialog({
		autoOpen: false,
		height: 300,
		width: 500,
		dialogClass: 'myTitleClass',
		modal: true,
		closeOnEscape: false,
		open: function (event, ui) {
			$('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
			
			var keyword = localStorage.getItem('keyword');
			$('#new_keyword').val( keyword ).focus();
		},
		buttons: {
			'Save': function () {
				$(this).dialog('close');
				
				var new_keyword = $('#new_keyword').val();
				// Input validation goes here!
				localStorage.setItem('keyword', new_keyword );
				show_note( "Your keyword has been updated to '" + new_keyword + "'" );
			}
			, 'Cancel': function () {
				$(this).dialog('close');
			}
		}
	});
	
	$('#opener').click(function () {
		$('#dialog').dialog('open');
	});
	
	var note = "No keyword is currently set."
	var current_keyword = localStorage.getItem('keyword');
	
	if( current_keyword )
		note = "The last keyword you set was: '" + current_keyword + "'";
	
	show_note( note );
}


// ---------------------------------------------------------------------------------------------- //
/*	show_note
*/
// ---------------------------------------------------------------------------------------------- //

function show_note( note )
{
	$('#note').text( note );
}





$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
  
  })

