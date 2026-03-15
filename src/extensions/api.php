<?php

use Moinframe\Loop\App;

return [
	[
		'pattern' => 'loop/comments',
		'method'  => 'GET',
		'action'  => function () {
			$comments = App::getComments();
			$result = [];

			foreach ($comments as $comment) {
				$data = $comment->toArray();

				$page = kirby()->page($comment->page);
				$data['pageTitle'] = $page !== null ? $page->title()->value() : t('moinframe.loop.panel.unknownPage');
				$data['pagePath'] = $page !== null ? 'pages/' . str_replace('/', '+', $page->id()) : null;
				$data['pageUrl'] = $page !== null ? $page->url() : null;

				$result[] = $data;
			}

			return $result;
		},
	],
	[
		'pattern' => 'loop/stats',
		'method'  => 'GET',
		'action'  => function () {
			$comments = App::getComments();
			$total = count($comments);
			$open = 0;
			$resolved = 0;
			$today = 0;
			$todayStart = strtotime('today');

			foreach ($comments as $comment) {
				if ($comment->status->value === 'RESOLVED') {
					$resolved++;
				} else {
					$open++;
				}
				if ($comment->timestamp >= $todayStart) {
					$today++;
				}
			}

			return compact('total', 'open', 'resolved', 'today');
		},
	],
	[
		'pattern' => 'loop/comments/(:num)/resolve',
		'method'  => 'POST',
		'action'  => function (int $id) {
			return ['ok' => App::resolveComment((string) $id)];
		},
	],
	[
		'pattern' => 'loop/comments/(:num)/unresolve',
		'method'  => 'POST',
		'action'  => function (int $id) {
			return ['ok' => App::unresolveComment((string) $id)];
		},
	],
];
