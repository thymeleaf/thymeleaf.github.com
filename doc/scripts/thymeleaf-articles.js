/*
 * Copyright 2013, The Thymeleaf Project (http://www.thymeleaf.org/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * JavaScript for performing post-Pandoc modifications on the Thymeleaf articles
 * in order to apply the website standard styles.
 * 
 * @author Daniel Fernandez
 */
(function() {
	'use strict';

	var $ = DumbQuerySelector.$;
	var $$ = DumbQuerySelector.$$;

	// Languages used for syntax highlighting
	var languages = ['html', 'java', 'javascript', 'xml', 'css', 'text'];

	// Fix the code markup generated by Pandoc to put the right code classes on
	// the right elements.  Makes for semantic code blocks, which is a requirement
	// of Prism.
	languages.forEach(function(language) {
		$$('pre.' + language).forEach(function(pre) {
			pre.classList.remove(language);
			$('code', pre).classList.add('language-' + language);
		});
	});

	// Run the Prism syntax highlighter
	Prism.highlightAll();

	// Have the site menu button reveal the site menu on click
	$('#site-menu-button').addEventListener('click', function(event) {
		$('#site-menu').classList.toggle('show-menu');
	});

})();
