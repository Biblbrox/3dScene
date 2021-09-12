#ifndef FSEXCEPTION_HPP
#define FSEXCEPTION_HPP

#include <string>

#include "basegameexception.hpp"

/**
 * Exception class that can be throw when happened some error
 * with file system(can't open file, no access, etc..)
 */
class FSException: public BaseGameException
{
public:
    explicit FSException(std::string msg,
                         std::string fileLog = program_log_file_name(),
                         Category category = Category::INTERNAL_ERROR)
                         : BaseGameException(msg, fileLog, category) {}
};


#endif //MOONLANDER_FSEXCEPTION_HPP
