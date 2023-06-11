
      $(document).ready(function() {
        $('.menu-item').click(function(e) {
          e.preventDefault();
          
          var page = $(this).attr('href');
          
          // Load content from the specified page
          $.ajax({
            url: page,
            dataType: 'html',
            success: function(response) {
              $('#content').html(response);
            }
          });
        });
      });
    