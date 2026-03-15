<?php

return [
	'loop' => function () {
		return [
			'label' => t('moinframe.loop.panel.label'),
			'icon'  => 'chat',
			'menu'  => true,
			'link'  => 'loop',

			'views' => [
				[
					'pattern' => 'loop',
					'action'  => fn () => [
						'component' => 'k-loop-comments-view',
						'title'     => t('moinframe.loop.panel.label'),
						'props'     => [],
					],
				],
			],
		];
	},
];
