All posts: `https://www.notkiller.moe/wp-json/wp/v2/posts?categories=28`

Sample response: (Unnecessary terms omitted)

```json
[
     {
          "id": 94,
          "date": "2022-11-28T11:27:56",
          "date_gmt": "2022-11-28T03:27:56",
          "modified": "2022-11-28T11:28:13",
          "modified_gmt": "2022-11-28T03:28:13",
          "link": "https://www.notkiller.moe/archives/94",
          "title": {
               "rendered": "Project Iridium 官网即将上线"
          },
          "content": {
               "rendered": "(pure html)",
          },
          "excerpt": {
               "rendered": "(pure html with escapes)",
          },
          "author": 1,
     }
]
```

Single post: `https://www.notkiller.moe/wp-json/wp/v2/posts/94`

```json
{
     "id": 94,
     "date": "2022-11-28T11:27:56",
     "date_gmt": "2022-11-28T03:27:56",
     "guid": {
          "rendered": "https://www.notkiller.moe/?\np: 94"
     },
     "modified": "2022-11-28T11:28:13",
     "modified_gmt": "2022-11-28T03:28:13",
     "slug": "project-iridium-官网即将上线",
     "status": "publish",
     "type": "post",
     "link": "https://www.notkiller.moe/archives/94",
     "title": {
          "rendered": "Project Iridium 官网即将上线"
     },
     "content": {
          "rendered": "(pure html)",
          "protected": false
     },
     "excerpt": {
          "rendered": "(pure html with escapes)",
          "protected": false
     },
     "author": 1,
     "featured_media": 0,
     "comment_status": "open",
     "ping_status": "open",
     "sticky": false,
     "template": "",
     "format": "standard",
     "meta": [],
     "categories": [
          28
     ],
     "tags": [],
}
```
