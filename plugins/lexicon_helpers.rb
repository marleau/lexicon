class Jekyll::Site
    alias :site_payload_without_group :site_payload

    def site_payload
        data = site_payload_without_group
        data['site']['group_by_alphabet'] = LexiconHelpers::group_by_alphabet(self.posts)
        data
    end
end

module LexiconHelpers
    def self.group_by_alphabet(posts)
        grouped = posts.group_by { |post| post.to_liquid['title'][0] }
        grouped.sort
    end
end

module Jekyll
    require_relative 'post_filters'
    
    class DefinitionsFilter < PostFilter
        def pre_filter(post)
        end
    end
end
