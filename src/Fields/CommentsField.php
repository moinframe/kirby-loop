<?php

namespace Moinframe\Loop\Fields;

use Kirby\Cms\Page;
use Kirby\Form\Field\DisplayField;
use Kirby\Reflection\Attributes\Prop;
use Moinframe\Loop\App;

class CommentsField extends DisplayField
{
    /**
     * Which comments to list: `all`, `open` or `resolved`
     */
    #[Prop]
    protected string $status = 'all';

    /**
     * Comments are loaded through this route instead of the props,
     * so the refresh button can fetch them again without reloading the view.
     * @return array<int, array<string, mixed>>
     */
    public function api(): array
    {
        $field = $this;

        return [
            [
                'pattern' => '',
                'method'  => 'GET',
                'action'  => fn () => ['comments' => $field->comments()],
            ],
        ];
    }

    public function label(): string
    {
        if ($this->label === null || $this->label === []) {
            return tt('moinframe.loop.panel.label');
        }

        return parent::label();
    }

    public function status(): string
    {
        return in_array($this->status, ['all', 'open', 'resolved'], true) ? $this->status : 'all';
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function comments(): array
    {
        $model    = $this->model();
        $status   = $this->status();
        $comments = $model instanceof Page
            ? App::getCommentsByPage($model)
            : App::getComments();

        $items = [];

        foreach ($comments as $comment) {
            $resolved = $comment->status->value === 'RESOLVED';

            if ($status === 'open' && $resolved === true) {
                continue;
            }

            if ($status === 'resolved' && $resolved === false) {
                continue;
            }

            $language = $comment->lang !== '' ? $comment->lang : null;

            $pageUrl = $model instanceof Page
                ? $model->url($language)
                : (kirby()->page('page://' . $comment->page)?->url($language) ?? $comment->url);

            $items[] = [
                'id'         => $comment->id,
                'comment'    => App::plainText($comment->comment),
                'author'     => $comment->resolveAuthor(),
                'status'     => $comment->status->value,
                'replyCount' => count($comment->replies),
                'pageUrl'    => $pageUrl,
                'lang'       => $comment->lang,
            ];
        }

        return $items;
    }
}
